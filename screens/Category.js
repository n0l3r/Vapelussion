import { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TextInput, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';

// colors
import { Colors, screenOptions } from '../utils';

const Category = ({ navigation }) => {
    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    }, [navigation])
    
    const back = () => {
        navigation.getParent().setOptions({ tabBarStyle: screenOptions.tabBarStyle });
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Header title="Category" back={back} />
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
                            <Icon name="heart-outline" size={30} color={Colors.secondary} />
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
                            <Icon name="heart-outline" size={30} color={Colors.secondary} />
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
                            <Icon name="heart-outline" size={30} color={Colors.secondary} />
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
                            <Icon name="heart-outline" size={30} color={Colors.secondary} />
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
                            <Icon name="heart-outline" size={30} color={Colors.secondary} />
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
                            <Icon name="heart-outline" size={30} color={Colors.secondary} />
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
                            <Icon name="heart-outline" size={30} color={Colors.secondary} />
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
                            <Icon name="heart-outline" size={30} color={Colors.secondary} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.bgDark,
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.bgDark,
        padding: 10,
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