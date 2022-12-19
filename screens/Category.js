import { useEffect, useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TextInput, Pressable, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';

// api
import { getProductsByCategory } from '../api/productApi';
import { addToWishlist, checkWithWishlist, deleteWishlist, getWishlist } from '../api/wishlistApi';

// context
import { AuthContext } from '../context/AuthContext';

// colors
import { Colors, screenOptions } from '../utils';

const Category = ({ navigation, route }) => {

    const title = route.params.category;

    const { user, baseUrl } = useContext(AuthContext);

    const [products, setProducts] = useState([]);

    const [wishlist, setWishlist] = useState([]);


    useEffect(() => {
        getProductsByCategory(route.params.categoryId, user.token)
            .then((response) => {
                let newProducts = response.data.map((item) => {
                    item.wishlist = false;
                    return item;
                })
                setProducts(newProducts);

            })
            .catch((error) => {
                console.log(error);
            });

        getWishlist(user.id, user.token)
            .then((response) => {
                setWishlist(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

        wishlist.map((item) => {
            if (item.product_id === product.id) {
                product.wishlist = true;
            }
        })


        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    }, [])

    const back = () => {
        navigation.getParent().setOptions({ tabBarStyle: screenOptions.tabBarStyle });
        navigation.goBack();
    }

    const addToWislistHandler = (id, status) => {
        if (status === true) {
            deleteWishlist(user.id, id, user.token)
                .then((response) => {
                    console.log(response.data);
                    
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            addToWishlist({ user_id: user.id, product_id: id }, user.token)
                .then((response) => {
                    console.log(response.data);
                    
                })
                .catch((error) => {
                    console.log(error);
                })
        }

        const newProduct = products.map((item) => {
            if (item.id === id && item.wishlist === false) {
                item.wishlist = true;
            } else if (item.id === id && item.wishlist === true) {
                item.wishlist = false;
            }
            return item;
        })
        setProducts(newProduct);

    }

    const renderItem = (item) => {
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
                        <Pressable onPress={() => addToWislistHandler(product.id, product.wishlist)}>
                            <Icon name={product.wishlist ? "heart" : "heart-outline"} size={30} color={product.wishlist ? Colors.danger : Colors.light} />
                        </Pressable>

                    </View>
                </View>
            </Pressable>
        )
    }




    



    return (
        <View style={styles.container}>
            <Header title={title} back={back} />
            <FlatList style={styles.body} data={products} renderItem={({ item }) => renderItem(item)} numColumns={2} keyExtractor={item => item.id} />

        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.bgDark,
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
        marginHorizontal: 5,
    },
    cardHeader: {
        width: '100%',
        height: '80%',
        borderRadius: 5,
        marginBottom: 10,
        // backgroundColor: Colors.secondary,
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