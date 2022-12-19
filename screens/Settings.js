import { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

// colors
import { Colors, screenOptions } from '../utils';

import { AuthContext } from '../context/AuthContext';
import { updateProfile } from '../api/authApi';



const Settings = ({ navigation }) => {
    const { user, baseUrl } = useContext(AuthContext);

    const [body, setBody] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address
    });

    const handleChange = (name, value) => {
        setBody({ ...body, [name]: value });
    }

    const update = () => {
        updateProfile(body, user.id, user.token)
            .then((response) => {
                console.log(response.data);
                if (response.status == 203) {
                    alert('Update Success');
                } else {
                    alert('Update Failed');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }



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
                                <TextInput style={styles.menuText} value={body.name} placeholderTextColor={Colors.secondary} onChangeText={(text) => handleChange('name', text)} />
                            </View>


                            <View style={styles.cardContentRow}>
                                <Icon name="gmail" size={30} color={Colors.secondary} />
                                <TextInput style={styles.menuText} value={body.email} placeholderTextColor={Colors.secondary} onChangeText={(text) => handleChange('email', text)} />
                            </View>
                            <View style={styles.cardContentRow}>
                                <Icon name="phone-outline" size={30} color={Colors.secondary} />
                                <TextInput style={styles.menuText} value={body.phone} placeholderTextColor={Colors.secondary} onChangeText={(text) => handleChange('phone', text)} />
                            </View>

                            <View style={styles.cardContentRow}>
                                <Icon name="google-maps" size={30} color={Colors.secondary} />
                                <TextInput style={styles.menuText} value={body.address} placeholderTextColor={Colors.secondary} onChangeText={(text) => handleChange('address', text)} />
                            </View>

                            <Pressable style={styles.btnLarge} onPress={update}>
                                <Text style={styles.btnLargeText}>Save</Text>
                            </Pressable>
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
