import { useEffect, useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Pressable, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';

// colors
import { Colors, screenOptions } from '../utils';

import { AuthContext } from '../context/AuthContext';

import { getCartByUserId, deleteCart, updateCart } from '../api/cartApi';



const Cart = ({ navigation }) => {
    const { user, baseUrl } = useContext(AuthContext);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        getCartByUserId(user.id, user.token)
            .then((response) => {
                setCart(response.data);
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

    const deleteCartHandler = (id) => {
        deleteCart(id, user.token)
            .then((response) => {
                // delete from cart
                const newCart = cart.filter((item) => item.id !== id);
                setCart(newCart);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const plusQuantity = (id) => {


        const newCart = cart.map((item) => {
            if (item.id === id) {
                item.quantity = item.quantity + 1;
                updateCart({ quantity: item.quantity }, id, user.token)
            }
            return item;
        });
        setCart(newCart);
    }

    const minusQuantity = (id) => {

        const newCart = cart.map((item) => {
            if (item.id === id && item.quantity > 1) {
                item.quantity = item.quantity - 1;
                updateCart({ quantity: item.quantity }, id, user.token)
            }
            return item;
        });
        setCart(newCart);
    }

    const renderItem = ({ item }) => {
        console.log(item);
        return (
            <View style={styles.cardHorizontal}>
                <View style={styles.cardImgHorizontal}>
                    <Image style={styles.cardImg} source={{ uri: `${baseUrl}/${item.image}` }} />
                </View>

                <View style={styles.cardContentHorizontal}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <View style={styles.row}>
                        <Pressable onPress={() => minusQuantity(item.id)}>
                            <Icon name="minus" size={30} color={Colors.secondary} />
                        </Pressable>
                        <Text style={styles.cardText}>{item.quantity}</Text>
                        <Pressable onPress={() => plusQuantity(item.id)}>
                            <Icon name="plus" size={30} color={Colors.secondary} />
                        </Pressable>
                    </View>

                </View>
                <View style={styles.cardFooterHorizontal}>
                    <Pressable style={styles.end} onPress={() => deleteCartHandler(item.id)}>
                        <Icon name="close" size={30} color={Colors.secondary} />
                    </Pressable>
                    <Text style={styles.cardPrice}>{item.price}</Text>

                </View>
            </View>
        )
    }




    return (
        <View style={styles.container}>
            <Header title="Cart" back={back} />

            <FlatList style={styles.body} data={cart} renderItem={renderItem} keyExtractor={item => item.id} />

           

            <View style={styles.footer}>

                {cart.length > 0 ?
                <Pressable style={styles.buttonAdd} onPress={() => navigation.navigate('Checkout')}>
                    <Icon name="cart-check" size={30} color={Colors.light} />
                    <Text style={styles.buttonAddText}>Checkout</Text>
                </Pressable>
                :<Text style={styles.emptyCart}>Your cart is empty</Text>
                }

            </View>
        </View>
    )
}

export default Cart

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
    cardImg: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    cardContentHorizontal: {
        width: '50%',
        height: '100%',
        paddingLeft: 15,
        justifyContent: 'space-between',
    },
    cardFooterHorizontal: {
        width: '20%',
        height: '100%',
        justifyContent: 'space-between'
    },
    cardTitle: {
        color: Colors.light,
        fontSize: 20,
        fontWeight: 'bold',
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

    footer: {
        backgroundColor: Colors.bgHeader,
        padding: '5%',

    },
    buttonAdd: {
        backgroundColor: Colors.info,
        width: "100%",
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonAddText: {
        color: Colors.light,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
    emptyCart: {
        color: Colors.light,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
    }
})