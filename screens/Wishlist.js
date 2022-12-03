import { View, Text, ScrollView, StyleSheet, Dimensions, TextInput,Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// colors
import Colors from '../utils';

const Wishlist = () => {
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
            <View style={styles.content}>
                <View style={styles.cardVertical}>
                    <View style={styles.cardHeader}>
                    </View>
                    <View style={styles.cardFooter}>
                        <View style={styles.cardFooterLeft}>
                            <Text style={styles.cardTitle}>Title</Text>
                            <Text style={styles.cardPrice}>$ 100</Text>
                        </View>

                        {/* icon heart */}
                        <Icon name="heart" size={30} color={Colors.danger} />
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
                        <Icon name="heart" size={30} color={Colors.danger} />
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
                        <Icon name="heart" size={30} color={Colors.danger} />
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
                        <Icon name="heart" size={30} color={Colors.danger} />
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
                        <Icon name="heart" size={30} color={Colors.danger} />
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
                        <Icon name="heart" size={30} color={Colors.danger} />
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
                        <Icon name="heart" size={30} color={Colors.danger} />
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
                        <Icon name="heart" size={30} color={Colors.danger} />
                    </View>
                </View>
            </View>
        </ScrollView>
        </View>
    )
}

export default Wishlist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.bgDark,
        marginBottom: 60,
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        
    },
    cardVertical: {
        width: Dimensions.get('window').width / 2 - 20,
        height: 300,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: Colors.bgHeader,
        padding: 10,
        marginBottom: 20,
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