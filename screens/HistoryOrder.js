import { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';

// colors
import { Colors, screenOptions } from '../utils';


const HistoryOrder = ({ navigation }) => {
    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    }, [navigation])
    const back = () => {
        navigation.getParent().setOptions({ tabBarStyle: screenOptions.tabBarStyle });
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Header title="HistoryOrder" back={back} />

            <ScrollView style={styles.body}>
                {/* Card Info Profile */}
                <View style={styles.content}>
                    <View style={styles.cardHorizontal}>
                        <View style={styles.cardImgHorizontal}>
                        </View>

                        <View style={styles.cardContentHorizontal}>
                            <Text style={styles.cardTitle}>Title</Text>
                            <Text style={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquet lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet lorem. </Text>
                            <View style={styles.row}>
                            <Text style={styles.cardPrice}>$100</Text>
                            </View>

                        </View>
                        
                    </View>
                </View>

            </ScrollView>
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
    },
    cardImgHorizontal: {
        width: '30%',
        height: '100%',
        borderRadius: 5,
        backgroundColor: Colors.secondary,
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