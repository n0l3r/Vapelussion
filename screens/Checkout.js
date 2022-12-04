import { useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Dimensions, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';

// colors
import { Colors, screenOptions } from '../utils';


const Checkout = ({ navigation }) => {
    const back = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Header title="Checkout" back={back} />

            <ScrollView style={styles.body}>
                {/* Card Info Profile */}
                <View style={styles.content}>
                    <Text style={styles.title}>Purchase Product</Text>
                    <View style={styles.cardHorizontal}>
                        <View style={styles.cardImgHorizontal}>
                        </View>

                        <View style={styles.cardContentHorizontal}>
                            <Text style={styles.cardTitle}>Title</Text>
                            <View style={styles.row}>
                                <Icon name="minus" size={30} color={Colors.secondary} />
                                <Text style={styles.cardText}>1</Text>
                                <Icon name="plus" size={30} color={Colors.secondary} />
                            </View>

                        </View>
                        <View style={styles.cardFooterHorizontal}>
                            <View style={styles.end}>
                                <Icon name="checkbox-blank-outline" size={30} color={Colors.secondary} />
                            </View>
                            <Text style={styles.cardPrice}>$100</Text>

                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardContent}>

                            <View style={styles.col}>
                                <Text style={styles.cardTitle}>Penerima </Text>
                                <Text style={styles.cardText}>John Doe</Text>
                            </View>

                            <View style={styles.col}>
                                <Text style={styles.cardTitle}>No Handphone </Text>
                                <Text style={styles.cardText}>John Doe</Text>
                            </View>

                            <View style={styles.col}>
                                <Text style={styles.cardTitle}>Address </Text>
                                <Text style={styles.cardText}>jl. Abdul Somad No.12</Text>
                            </View>




                        </View>
                    </View>
                </View>

            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.cardTitle}>Total: $100</Text>

                <Pressable style={styles.buttonAdd}>
                    <Icon name="cart-check" size={30} color={Colors.light} />
                    <Text style={styles.buttonAddText}>Checkout</Text>
                </Pressable>

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
        backgroundColor: Colors.secondary,
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