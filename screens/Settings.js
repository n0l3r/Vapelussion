import { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

// colors
import { Colors, screenOptions } from '../utils';

const Settings = ({ navigation }) => {
    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    }, [navigation])
    const back = () => {
        navigation.getParent().setOptions({ tabBarStyle: screenOptions.tabBarStyle });
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <Header title={"Settings"} back={back} />

            <ScrollView style={styles.body}>
                {/* Card Info Notification */}
                <View style={styles.content}>
                    <View style={styles.card}>
                        <View style={styles.cardContent}>

                            <View style={styles.cardContentRow}>
                                <Icon name="account-outline" size={30} color={Colors.secondary} />
                                <TextInput style={styles.menuText} placeholder="John Doe" />
                            </View>


                            <View style={styles.cardContentRow}>
                                <Icon name="gmail" size={30} color={Colors.secondary} />
                                <TextInput style={styles.menuText} placeholder="johndoe12@gmail.com" />
                            </View>
                            <View style={styles.cardContentRow}>
                                <Icon name="phone-outline" size={30} color={Colors.secondary} />
                                <TextInput style={styles.menuText} placeholder="08991234525" />
                            </View>

                            <View style={styles.btnLarge}>
                                <Text style={styles.btnLargeText}>Save</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.bgDark,
    },
    body: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.bgDark,
        padding: 10,
    },
    content: {
        marginBottom: 20,
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





});
