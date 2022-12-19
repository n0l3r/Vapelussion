import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, TextInput, Pressable, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';

// colors
import { Colors, screenOptions } from '../utils';

import { AuthContext } from '../context/AuthContext';

import { getWishlist, deleteWishlist } from '../api/wishlistApi';
import { getProductsById } from '../api/productApi';


const Wishlist = ({ navigation }) => {

    const { user, baseUrl } = useContext(AuthContext);

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        getWishlist(user.id, user.token)
            .then((response) => {
                setWishlist(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }, [])

    const deleteWishlistHandler = (id) => {
        deleteWishlist(id, user.token)
            .then((response) => {
                const newWishlist = wishlist.filter((item) => item.id !== id);
                setWishlist(newWishlist);
            })
            .catch((error) => {
                console.log(error);
            })
    }



    const renderItem = (item) => {
        console.log(item);
        const product = item;
        const image = `${baseUrl}/${product.image}`

        return (
            <Pressable style={styles.card} onPress={() => navigation.navigate('DetailProduct', { productId: product.id })}>
                <View style={styles.cardVertical}>
                    <View style={styles.cardHeader}>
                        <Image source={{ uri: image }} style={styles.cardImage} />
                    </View>
                    <View style={styles.cardFooter}>
                        <View style={styles.cardFooterLeft}>
                            <Text style={styles.cardTitle}>{product.name}</Text>
                            <Text style={styles.cardPrice}>{product.price}</Text>
                        </View>
                        <Pressable onPress={() => deleteWishlistHandler(product.id)}>
                            <Icon name="heart" size={30} color={Colors.danger}/>
                        </Pressable>

                    </View>
                </View>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <Header title="Wishlist" />
            <FlatList style={styles.body} data={wishlist} renderItem={({ item }) => renderItem(item)} numColumns={2} keyExtractor={item => item.id} />

        </View>
    )
}

export default Wishlist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.bgDark,
        paddingBottom: '15%'
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.bgDark,
        padding: 10,
    },
    content: {
        marginBottom: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

    },
    cardVertical: {
        width: Dimensions.get('window').width / 2 - 20,
        height: 300,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: Colors.bgHeader,
        padding: 10,
        marginBottom: 20,
    },
    cardHeader: {
        width: '100%',
        height: '80%',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: Colors.secondary,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    cardFooter: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardFooterLeft: {
        flexDirection: 'column',
    },
    cardTitle: {
        color: Colors.light,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardPrice: {
        color: Colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
    },
})