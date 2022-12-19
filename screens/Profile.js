import React, { useContext } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';

// colors
import { Colors, screenOptions } from '../utils';

import { AuthContext } from '../context/AuthContext';


const Profile = ({ navigation }) => {

    const { user, baseUrl } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Header title="Profile" />

            <ScrollView style={styles.body}>
                {/* Card Info Profile */}
                <View style={styles.content}>
                    <View style={styles.cardHorizontal}>
                        <View style={styles.cardImgHorizontal}>
                            <Icon name="account-circle-outline" size={70} color={Colors.info} />
                        </View>

                        <View style={styles.cardContentHorizontal}>
                            <Text style={styles.cardTitle}>{user.name}</Text>
                            <Text style={styles.cardText}>{user.phone}</Text>
                            <Text style={styles.cardText}>{user.email}</Text>
                        </View>

                        <View style={styles.cardFooterHorizontal}>
                            <Pressable onPress={() => navigation.navigate('Settings')}>
                                <Icon name="pencil-outline" size={30} color={Colors.secondary} />
                            </Pressable>
                        </View>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Pressable onPress={() => navigation.navigate('Settings')}>
                                <View style={styles.cardContentRow}>
                                    <View style={styles.cardContentLeft}>
                                        <Icon name="cog-outline" size={30} color={Colors.secondary} />
                                        <Text style={styles.menuText}>Settings</Text>
                                    </View>
                                    <View style={styles.cardContentRight}>
                                        <Icon name="chevron-right" size={30} color={Colors.secondary} />
                                    </View>
                                </View>
                            </Pressable>

                            <View style={styles.cardContentRow}>
                                <View style={styles.cardContentLeft}>
                                    <Icon name="information-outline" size={30} color={Colors.secondary} />
                                    <Text style={styles.menuText}>Information</Text>
                                </View>
                                <View style={styles.cardContentRight}>
                                    <Icon name="chevron-right" size={30} color={Colors.secondary} />
                                </View>
                            </View>

                            <Pressable onPress={() => navigation.navigate('HistoryOrder')}>
                                <View style={styles.cardContentRow}>
                                    <View style={styles.cardContentLeft}>
                                        <Icon name="format-list-bulleted" size={30} color={Colors.secondary} />
                                        <Text style={styles.menuText}>Order History</Text>
                                    </View>
                                    <View style={styles.cardContentRight}>
                                        <Icon name="chevron-right" size={30} color={Colors.secondary} />
                                    </View>
                                </View>
                            </Pressable>

                            <Pressable onPress={() => navigation.navigate('AuthStack')} style={styles.btnLarge}>
                                <Text style={styles.btnLargeText}>Logout</Text>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile

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
    cardHorizontal: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 25,
        // height: 150,
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
        // backgroundColor: Colors.secondary,
        alignItems: 'center',
        // justifyContent: 'center'

    },
    cardContentHorizontal: {
        width: '60%',
        height: '100%',
        paddingLeft: 15,
    },
    cardFooterHorizontal: {
        width: '10%',
        height: '100%',
        alignItems: 'flex-end',
    },
    cardTitle: {
        color: Colors.light,
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardText: {
        color: Colors.secondary,
        fontSize: 18,
    },
    card: {
        width: Dimensions.get('window').width - 25,
        height: Dimensions.get('window').height / 2,
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
        paddingBottom: 10,
        flexDirection: 'row',
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 1,
        marginBottom: 20,
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
        backgroundColor: Colors.danger,
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