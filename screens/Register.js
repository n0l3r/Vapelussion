import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// colors
import { Colors } from '../utils'

const Register = () => {
    return (
        <View style={styles.container}>
            <View styles={styles.logo}>
                <Image source={require('../assets/icon.png')} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Register</Text>

                <View style={styles.inputGroup}>
                    <Icon name="account-outline" size={24} color={Colors.light} />
                    <TextInput style={styles.input} placeholder="Name" />
                </View>

                <View style={styles.inputGroup}>
                    <Icon name="google-maps" size={24} color={Colors.light} />
                    <TextInput style={styles.input} placeholder="Address" />
                </View>

                <View style={styles.inputGroup}>
                    <Icon name="phone-outline" size={24} color={Colors.light} />
                    <TextInput style={styles.input} placeholder="Phone" />
                </View>

                <View style={styles.inputGroup}>
                    <Icon name="email-outline" size={24} color={Colors.light} />
                    <TextInput style={styles.input} placeholder="Email" />
                </View>

                <View style={styles.inputGroup}>
                    <Icon name="lock-outline" size={24} color={Colors.light} />
                    <TextInput style={styles.input} placeholder="Password" />
                </View>

                <Pressable style={styles.btnLarge}>
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