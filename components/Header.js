import { View, Text,  Pressable,  StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../utils';
const Header = ({title, back}) => {
    return (
        <View style={styles.header}>
                <View style={styles.btnBack}>
                    {back ?

                    <Pressable onPress={back}>
                        <Icon name="arrow-left" size={30} color={Colors.light} />
                    </Pressable>
                    : null}
                </View>
                <View style={styles.headerTitle}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: '8%',
        backgroundColor: Colors.bgHeader,
        paddingHorizontal: '4%',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? -10 : 0,
    },
    btnBack: {
        width: '25%',
    },
    headerTitle: {
        width: '50%',
        alignItems: 'center',
    },
    title: {
        color: Colors.light,
        fontSize: 20,
        fontWeight: 'bold',
    },
})