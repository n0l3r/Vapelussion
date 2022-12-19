import { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Pressable, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchBar from '../components/SearchBar';

import { Colors, screenOptions } from '../utils';

import { AuthContext } from '../context/AuthContext';

const Home = ({ navigation }) => {

    const { user, isLogin } = useContext(AuthContext);

    console.log(user);

    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: screenOptions.tabBarStyle });
    }, [navigation])

    return (
        <View style={styles.container}>
            <SearchBar navigation={navigation} />

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
                            <Pressable onPress={() => navigation.navigate('Category', { categoryId: 1, category: "Cotton" })}>
                                <View style={styles.cardSquare}>
                                    <View style={styles.cardHeaderSquare}>
                                        <Image source={require('../assets/icon/cotton.png')} style={styles.cardImgSquare} />
                                    </View>
                                    <View style={styles.cardFooterSquare}>
                                        <Text style={styles.cardTitle}>Cotton</Text>
                                    </View>
                                </View>
                            </Pressable>

                            <Pressable onPress={() => navigation.navigate('Category', { categoryId: 2, category: "Mod" })}>
                                <View style={styles.cardSquare}>
                                    <View style={styles.cardHeaderSquare}>
                                        <Image source={require('../assets/icon/mod.png')} style={styles.cardImgSquare} />
                                    </View>
                                    <View style={styles.cardFooterSquare}>
                                        <Text style={styles.cardTitle}>Mod</Text>
                                    </View>
                                </View>
                            </Pressable>

                            <Pressable onPress={() => navigation.navigate('Category', { categoryId: 3, category: "RDA" })}>
                                <View style={styles.cardSquare}>
                                    <View style={styles.cardHeaderSquare}>
                                        <Image source={require('../assets/icon/rda.png')} style={styles.cardImgSquare} />
                                    </View>
                                    <View style={styles.cardFooterSquare}>
                                        <Text style={styles.cardTitle}>RDA</Text>
                                    </View>
                                </View>
                            </Pressable>

                            <Pressable onPress={() => navigation.navigate('Category', { categoryId: 4, category: "OCC" })}>
                                <View style={styles.cardSquare}>
                                    <View style={styles.cardHeaderSquare}>
                                        <Image source={require('../assets/icon/occ.png')} style={styles.cardImgSquare} />
                                    </View>
                                    <View style={styles.cardFooterSquare}>
                                        <Text style={styles.cardTitle}>OCC</Text>
                                    </View>
                                </View>
                            </Pressable>

                            <Pressable onPress={() => navigation.navigate('Category', { categoryId: 5, category: "Liquid Saltnic" })}>
                                <View style={styles.cardSquare}>
                                    <View style={styles.cardHeaderSquare}>
                                        <Image source={require('../assets/icon/saltnic.png')} style={styles.cardImgSquare} />
                                    </View>
                                    <View style={styles.cardFooterSquare}>
                                        <Text style={styles.cardTitle}>Saltnic</Text>
                                    </View>
                                </View>
                            </Pressable>

                            <Pressable onPress={() => navigation.navigate('Category', { categoryId: 6, category: "Liquid Freebase" })}>
                                <View style={styles.cardSquare}>
                                    <View style={styles.cardHeaderSquare}>
                                        <Image source={require('../assets/icon/freebase.png')} style={styles.cardImgSquare} />
                                    </View>
                                    <View style={styles.cardFooterSquare}>
                                        <Text style={styles.cardTitle}>Freebase</Text>
                                    </View>
                                </View>
                            </Pressable>

                        </ScrollView>
                    </View>
                </View>

                {/* For You */}
                <View style={styles.content}>
                    <Text style={styles.title}>For You</Text>
                    <View style={styles.horizontalScroll}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <Pressable onPress={() => navigation.navigate('DetailProduct')}>
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
                            </Pressable>

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
        height: 120,
        borderRadius: 10,
        elevation: 5,
        marginRight: 10,
        // backgroundColor: Colors.bgHeader,
        marginRight: 10,
    },
    cardHeaderSquare: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        // backgroundColor: Colors.secondary,
    },
    cardImgSquare: {
        width: '100%',
        height: '80%',
        // borderRadius: 10,
    },

    cardFooterSquare: {
        width: '100%',
        paddingTop: 10,
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
