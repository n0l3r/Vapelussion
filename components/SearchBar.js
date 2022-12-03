import { View, StyleSheet, TextInput, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors, screenOptions } from '../utils';

const SearchBar = ({navigation}) => {
    return (
        <View style={styles.header}>
            <View style={styles.inputGroup}>
                <Icon name="magnify" size={30} color={Colors.secondary} />
                <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={Colors.secondary} />
            </View>
            <Pressable onPress={() => navigation.navigate('Cart')}>
                <Icon name="cart-outline" size={30} color={Colors.secondary} />
            </Pressable>

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
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
})