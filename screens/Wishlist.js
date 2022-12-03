import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// colors
import Colors from '../utils';

const Wishlist = () => {
    return (
        <ScrollView style={styles.container}>
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
    )
}

export default Wishlist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.bgDark,
        padding: '3%',
        marginBottom: 60,
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