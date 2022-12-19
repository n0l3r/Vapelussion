import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// colors
import { Colors } from '../utils'

// api
import { userRegister } from '../api/authApi'



const Register = ({navigation}) => {
    const [body, setBody] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        password: '',
        role: 'user',
        image: 'default.png'
    });

    const handleChange = (name, value) => {
        setBody({ ...body, [name]: value });
    }

    const register = () => {
        userRegister({
            name: body.name,
            address: body.address,
            phone: body.phone,
            email: body.email,
            password: body.password,
            role: body.role,
            image: body.image
        })
            .then((response) => {
                if(response.status == 203) {
                    console.log(response.data);
                    setBody({
                        name: '',
                        address: '',
                        phone: '',
                        email: '',
                        password: '',
                        role: 'user',
                        image: 'default.png'
                    });
                    alert('Register Success');
                    navigation.navigate('Login');
                } else {
                    alert('Register Failed');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <View style={styles.container}>
            <View styles={styles.logo}>
                <Image source={require('../assets/icon.png')} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Register</Text>

                <View style={styles.inputGroup}>
                    <Icon name="account-outline" size={24} color={Colors.light} />
                    <TextInput style={styles.input} placeholder="Name" value={body.name} onChange={(e) => handleChange('name', e.nativeEvent.text)} />
                </View>

                <View style={styles.inputGroup}>
                    <Icon name="google-maps" size={24} color={Colors.light} />
                    <TextInput style={styles.input} placeholder="Address" value={body.address} onChange={(e) => handleChange('address', e.nativeEvent.text)} />
                </View>

                <View style={styles.inputGroup}>
                    <Icon name="phone-outline" size={24} color={Colors.light} />
                    <TextInput style={styles.input} placeholder="Phone" value={body.phone} onChange={(e) => handleChange('phone', e.nativeEvent.text)} />
                </View>

                <View style={styles.inputGroup}>
                    <Icon name="email-outline" size={24} color={Colors.light} />
                    <TextInput style={styles.input} placeholder="Email" value={body.email} onChange={(e) => handleChange('email', e.nativeEvent.text)} />
                </View>

                <View style={styles.inputGroup}>
                    <Icon name="lock-outline" size={24} color={Colors.light} />
                    <TextInput style={styles.input} placeholder="Password" value={body.password} onChange={(e) => handleChange('password', e.nativeEvent.text)} />
                </View>

                <Pressable style={styles.btnLarge} onPress={register}>
                    <Text style={styles.btnLargeText}>Register</Text>
                </Pressable>

                <Pressable style={styles.btnSmall}>
                    <Text style={styles.btnSmallText}>Sign In</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.bgDark,
        paddingBottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        alignItems: 'center',
        backgroundColor: Colors.bgHeader,
        width: '80%',
        padding: 20,
        borderRadius: 10,
        elevation: 5
    },
    title: {
        color: Colors.light,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
        backgroundColor: Colors.bgDark,
        borderRadius: 10,
        height: 50,
        paddingLeft: 10
    },
    input: {
        height: '100%',
        backgroundColor: Colors.bgDark,
        borderRadius: 10,
        paddingLeft: 10,
        color: Colors.light
    },
    btnLarge: {
        backgroundColor: Colors.info,
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    btnLargeText: {
        color: Colors.light,
        fontSize: 16,
        fontWeight: 'bold'
    },
    btnSmall: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    btnSmallText: {
        color: Colors.secondary,
        fontSize: 16,
        fontWeight: 'bold'
    }

})