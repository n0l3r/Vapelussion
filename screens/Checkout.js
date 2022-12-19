import { useEffect, useContext, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Dimensions, Pressable, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';

// colors
import { Colors, screenOptions } from '../utils';

import { AuthContext } from '../context/AuthContext';

import { getCartByUserId, deleteCart, updateCart, checkoutCart } from '../api/cartApi';
import { addNotification } from '../api/notificationApi';

const Checkout = ({ navigation }) => {

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
    }, [])

    const back = () => {
        navigation.getParent().setOptions({ tabBarStyle: screenOptions.tabBarStyle });
        navigation.goBack();
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

    const checkoutHandler = () => {
        checkoutCart(user.id, user.token)
            .then((response) => {
                setCart([]);
                if(response.status === 203){
                    addNotification({user_id: user.id, message: "Checkout Success"}, user.token)
                    alert("Checkout Success");
                    navigation.getParent().setOptions({ tabBarStyle: screenOptions.tabBarStyle });
                    navigation.navigate('Home');
                }
            })
            .catch((error) => {
                console.log(error);
            });
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
            <Header title="Checkout" back={back} />
            <View style={styles.body}>
                {cart.length === 0 && <Text style={styles.title}>No items in cart</Text>}
                <FlatList style={styles.content} data={cart} renderItem={renderItem} keyExtractor={item => item.id} />



                <View style={styles.card}>
                    <View style={styles.cardContent}>

                        <View style={styles.col}>
                            <Text style={styles.cardTitle}>Recipient </Text>
                            <Text style={styles.cardText}>{user.name}</Text>
                        </View>

                        <View style={styles.col}>
                            <Text style={styles.cardTitle}>Phone </Text>
                            <Text style={styles.cardText}>{user.phone}</Text>
                        </View>

                        <View style={styles.col}>
                            <Text style={styles.cardTitle}>Address </Text>
                            <Text style={styles.cardText}>{user.address}</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.footer}>
                <Text style={styles.cardTitle}>Total: {cart.reduce((a, b) => a + (b.price * b.quantity), 0)}</Text>

                {cart.length > 0 ?
                    <Pressable style={styles.buttonAdd} onPress={checkoutHandler}>
                        <Icon name="cart-check" size={30} color={Colors.light} />
                        <Text style={styles.buttonAddText}>Checkout</Text>
                    </Pressable>
                    :
                    <View style={[styles.buttonAdd, { backgroundColor: Colors.secondary }]}>
                        <Icon name="cart-check" size={30} color={Colors.light} />
                        <Text style={styles.buttonAddText}>Checkout</Text>
                    </View>
                }

            </View>
        </View>
    )
}

export default Checkout

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
    title: {
        color: Colors.light,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardHorizontal: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 25,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        marginBottom: 10,
        backgroundColor: Colors.bgHeader,
        padding: 15,
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
    col: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    footer: {
        backgroundColor: Colors.bgHeader,
        padding: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonAdd: {
        backgroundColor: Colors.info,
        width: "60%",
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

    card: {
        width: Dimensions.get('window').width - 25,
        height: 200,
        borderRadius: 10,
        elevation: 5,
        marginRight: 10,
        backgroundColor: Colors.bgHeader,
        padding: 15,
    },
    cardContent: {
        width: '100%',
        height: '100%',
    },
    cardContentRow: {
        padding: 10,
        flexDirection: 'row',
        borderColor: Colors.secondary,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    cardContentLeft: {
        width: '90%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardContentRight: {
        width: '10%',
        height: '100%',
        alignItems: 'flex-end',
    },
    menuText: {
        color: Colors.light,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 15,
    },
    btnLarge: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: Colors.info,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        bottom: 0,
        position: 'absolute',
    },
    btnLargeText: {
        color: Colors.light,
        fontSize: 20,
        fontWeight: 'bold',
    },


})