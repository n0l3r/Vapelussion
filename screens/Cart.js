import { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';

// colors
import { Colors, screenOptions } from '../utils';


const Cart = ({ navigation }) => {
    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    }, [navigation])
    const back = () => {
        navigation.getParent().setOptions({ tabBarStyle: screenOptions.tabBarStyle });
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Header title="Cart" back={back} />

            <ScrollView style={styles.body}>
                {/* Card Info Profile */}
                <View style={styles.content}>
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
                </View>

            </ScrollView>
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

})