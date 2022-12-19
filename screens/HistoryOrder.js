import { useEffect, useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';

// colors
import { Colors, screenOptions } from '../utils';

import { AuthContext } from '../context/AuthContext';

import { getOrders } from '../api/orderApi';


const HistoryOrder = ({ navigation }) => {
    const { user, baseUrl } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        getOrders(user.id, user.token)
            .then((response) => {
                setOrders(response.data);
            })
            .catch((error) => {
                console.log(error);
            });


        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    }, [navigation])
    const back = () => {
        navigation.getParent().setOptions({ tabBarStyle: screenOptions.tabBarStyle });
        navigation.goBack();
    }

    const renderItem = (item) => {
        console.log(item);
        const product = item
        const image = `${baseUrl}/${product.image}`
        return (
            <View style={styles.cardHorizontal}>
                <View style={styles.cardImgHorizontal}>
                    <Image style={styles.cardImg} source={{ uri: image }} />
                </View>

                <View style={styles.cardContentHorizontal}>
                    <Text style={styles.cardTitle}>{product.name}</Text>
                    <Text style={styles.cardDesc}>{product.description} </Text>
                    <View style={styles.row}>
                        <Text style={styles.cardPrice}>{product.price}</Text>
                    </View>

                </View>

            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header title="HistoryOrder" back={back} />

            <FlatList style={styles.body} data={orders} renderItem={({ item }) => renderItem(item)} keyExtractor={(item) => item.id} />
        </View>
    )
}

export default HistoryOrder

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
    },
    cardHorizontal: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 25,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        marginRight: 10,
        backgroundColor: Colors.bgHeader,
        padding: 15,
        marginBottom: 10,
    },
    cardImgHorizontal: {
        width: '30%',
        height: '100%',
        borderRadius: 5,
        // backgroundColor: Colors.secondary,
    },
    cardImg : {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    cardContentHorizontal: {
        width: '70%',
        height: '100%',
        paddingLeft: 15,
    },
    cardTitle: {
        color: Colors.light,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardDesc: {
        color: Colors.light,
        fontSize: 14,
        marginBottom: 10
    },

    cardPrice: {
        color: Colors.secondary,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
    cardText: {
        color: Colors.secondary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    end: {
        alignItems: 'flex-end',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
    },

})