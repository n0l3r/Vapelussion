import { View, Text, StyleSheet, TextInput, Dimensions, ScrollView, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// colors
import Colors from '../utils';

const Home = ({ navigation }) => {
    
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.inputGroup}>
                    <Icon name="magnify" size={30} color={Colors.secondary} />
                    <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={Colors.secondary} />
                </View>
                <Pressable onPress={() => navigation.navigate('Cart')}>
                    <Icon name="cart-outline" size={30} color={Colors.secondary} />
                </Pressable>

            </View>
            
            <ScrollView style={styles.body}>


                {/* offers */}
                <View style={styles.content}>
                    <Text style={styles.title}>Offers</Text>
                    <View style={styles.horizontalScroll}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <View style={styles.cardHorizontal}>
                                <View style={styles.cardImgHorizontal}>

                                </View>
                            </View>

                            <View style={styles.cardHorizontal}>
                                <View style={styles.cardImgHorizontal}>

                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>

                {/* Category */}
                <View style={styles.content}>
                    <Text style={styles.title}>Category</Text>
                    <View style={styles.horizontalScroll}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.cardSquare}>
                                <View style={styles.cardHeaderSquare}>

                                </View>
                                <View style={styles.cardFooterSquare}>
                                    <Text style={styles.cardTitle}>Title</Text>
                                </View>
                            </View>

                            <View style={styles.cardSquare}>
                                <View style={styles.cardHeaderSquare}>

                                </View>
                                <View style={styles.cardFooterSquare}>
                                    <Text style={styles.cardTitle}>Title</Text>
                                </View>
                            </View>

                            <View style={styles.cardSquare}>
                                <View style={styles.cardHeaderSquare}>

                                </View>
                                <View style={styles.cardFooterSquare}>
                                    <Text style={styles.cardTitle}>Title</Text>
                                </View>
                            </View>

                            <View style={styles.cardSquare}>
                                <View style={styles.cardHeaderSquare}>

                                </View>
                                <View style={styles.cardFooterSquare}>
                                    <Text style={styles.cardTitle}>Title</Text>
                                </View>
                            </View>

                            <View style={styles.cardSquare}>
                                <View style={styles.cardHeaderSquare}>

                                </View>
                                <View style={styles.cardFooterSquare}>
                                    <Text style={styles.cardTitle}>Title</Text>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </View>

                {/* offers */}
                <View style={styles.content}>
                    <Text style={styles.title}>Offers</Text>
                    <View style={styles.horizontalScroll}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <View style={styles.cardVertical}>
                                <View style={styles.cardHeader}>
                                </View>
                                <View style={styles.cardFooter}>
                                    <View style={styles.cardFooterLeft}>
                                        <Text style={styles.cardTitle}>Title</Text>
                                        <Text style={styles.cardPrice}>$ 100</Text>
                                    </View>

                                    {/* icon heart */}
                                    <Icon name="heart-outline" size={30} color={Colors.secondary} />
                                </View>
                            </View>

                            <View style={styles.cardVertical}>
                                <View style={styles.cardHeader}>
                                </View>
                                <View style={styles.cardFooter}>
                                    <View style={styles.cardFooterLeft}>
                                        <Text style={styles.cardTitle}>Title</Text>
                                        <Text style={styles.cardPrice}>$ 100</Text>
                                    </View>

                                    {/* icon heart */}
                                    <Icon name="heart-outline" size={30} color={Colors.secondary} />
                                </View>
                            </View>

                            <View style={styles.cardVertical}>
                                <View style={styles.cardHeader}>
                                </View>
                                <View style={styles.cardFooter}>
                                    <View style={styles.cardFooterLeft}>
                                        <Text style={styles.cardTitle}>Title</Text>
                                        <Text style={styles.cardPrice}>$ 100</Text>
                                    </View>

                                    {/* icon heart */}
                                    <Icon name="heart-outline" size={30} color={Colors.secondary} />
                                </View>
                            </View>


                        </ScrollView>
                    </View>
                </View>


            </ScrollView>
        </View>
    )
}

export default Home

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
    header: {
        flexDirection: 'row',
        height: '8%',
        backgroundColor: Colors.bgHeader,
        paddingHorizontal: '4%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? -10 : 0,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.bgDark,
        borderRadius: 30,
        paddingHorizontal: '2%',
        width: '90%',
        height: '60%',
    },
    input: {
        marginLeft: '2%',
        width: '81%',
        fontSize: 18,
        height: '90%',
        color: Colors.secondary,
        backgroundColor: Colors.bgDark,
    },
    content: {
        marginBottom: 20,
    },
    title: {
        color: Colors.light,
        fontSize: 20,
        fontWeight: 'bold',
    },
    horizontalScroll: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    cardHorizontal: {
        width: Dimensions.get('window').width - 25,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        marginRight: 10,
        backgroundColor: Colors.secondary,
    },
    cardImgHorizontal: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    cardSquare: {
        width: 100,
        height: 100,
        borderRadius: 10,
        elevation: 5,
        marginRight: 10,
        backgroundColor: Colors.bgHeader,
        marginRight: 10,
    },
    cardHeaderSquare: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: Colors.secondary,
    },
    cardFooterSquare: {
        width: '100%',
        height: 30,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    cardVertical: {
        width: Dimensions.get('window').width / 2 - 25,
        height: 300,
        borderRadius: 10,
        elevation: 5,
        marginRight: 10,
        backgroundColor: Colors.bgHeader,
        padding: 10,
    },
    cardHeader: {
        width: '100%',
        height: '80%',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: Colors.secondary,
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
