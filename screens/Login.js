import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native'

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { userLogin } from '../api/authApi';

// colors
import { Colors } from '../utils'

// context
import { AuthContext } from '../context/AuthContext';

const Login = ({ navigation }) => {

    const { isLogin, setIsLogin, user, setUser } = useContext(AuthContext);

    const [body, setBody] = useState({
        email: '',
        password: ''
    });

    const handleChange = (name, value) => {
        setBody({ ...body, [name]: value });
    }


    const handleLogin = () => {
        userLogin({
            email: body.email,
            password: body.password
        })
            .then((response) => {
                console.log(response.data.auth);
                if(response.data.auth) {
                    setIsLogin(true);

                    const dataUser = response.data.user;
                    setUser({
                        id: dataUser.id,
                        name: dataUser.name,
                        address: dataUser.address,
                        phone: dataUser.phone,
                        email: dataUser.email,
                        role: dataUser.role,
                        image: dataUser.image,
                        token: response.data.token
                    });
                    

                    alert('Login Success');
                    navigation.navigate('HomeStack');
                } else {
                    alert('Login Failed');
                }
            })
            .catch((error) => {
               alert('Login Failed');
            });
    }

    useEffect(() => {
        // if isLogin is true, redirect to HomeStack
        if(isLogin) {
            navigation.navigate('HomeStack');
        }
    }, [isLogin])

    return (
        <View style={styles.container}>
            <View styles={styles.logo}>
                <Image source={require('../assets/icon.png')} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputGroup}>
                    <Icon name="email-outline" size={24} color={Colors.light} />
                    <TextInput style={styles.input} placeholder="Email" value={body.email} onChange={(e) => handleChange('email', e.nativeEvent.text)} />
                </View>

                <View style={styles.inputGroup}>
                    <Icon name="lock-outline" size={24} color={Colors.light} />
                    <TextInput style={styles.input} placeholder="Password" value={body.password} onChange={(e) => handleChange('password', e.nativeEvent.text)} />
                </View>

                <Pressable style={styles.btnLarge} onPress={handleLogin}>
                    <Text style={styles.btnLargeText}>Login</Text>
                </Pressable>

                <Pressable style={styles.btnSmall} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.btnSmallText}>Sign Up</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default Login

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
        width: '80%',
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