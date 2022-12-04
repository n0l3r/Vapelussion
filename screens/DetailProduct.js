import { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

// colors
import { Colors, screenOptions } from '../utils';

const DetailProduct = ({ navigation }) => {
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
  }, [navigation])
  const back = () => {
    navigation.getParent().setOptions({ tabBarStyle: screenOptions.tabBarStyle });
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Header title={"DetailProduct"} back={back} />

      <ScrollView style={styles.body}>
        {/* Card Info Notification */}
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>

            </View>
            <View style={styles.cardFooter}>
              <View style={styles.row}>
                <View style={styles.cardFooterLeft}>
                  <Text style={styles.cardTitle}>Title</Text>
                </View>
                <View style={styles.cardFooterRight}>
                  <Text style={styles.cardPrice}>$ 100</Text>
                </View>
              </View>

              <View style={styles.cardDescription}>
                <Text style={styles.cardDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</Text>
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.row}>
          <View style={styles.buttonGroup}>
            <Pressable style={styles.button}>
              <Icon name="minus-circle-outline" size={30} color={Colors.secondary} />
            </Pressable>
            <Text style={styles.buttonText}>0</Text>
            <Pressable style={styles.button}>
              <Icon name="plus-circle-outline" size={30} color={Colors.secondary} />
            </Pressable>
          </View>
          <Pressable style={styles.buttonAdd}>
            <Text style={styles.buttonAddText}>Add to cart</Text>
          </Pressable>
        </View>
      </View>


    </View>
  );
};

export default DetailProduct

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
    backgroundColor: Colors.bgHeader,
    borderRadius: 10,
    flexDirection: "column",
    padding: 10,
    height: Dimensions.get("window").height * 0.8,
  },
  cardHeader: {
    height: "70%",
    backgroundColor: Colors.bgDark,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardFooter: {
    padding: 10,
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardFooterLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  cardFooterRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    width: 100,
    height: 30,
    borderRadius: 5,
  },

  cardTitle: {
    color: Colors.light,
    fontSize: 20,
    fontWeight: "bold",
  },
  cardPrice: {
    color: Colors.light,
    fontSize: 20,
    fontWeight: "bold",
  },
  cardDescription: {
    marginTop: 10,
  },
  cardDescriptionText: {
    color: Colors.light,
    fontSize: 14,
  },
  footer: {
    backgroundColor: Colors.bgHeader,
    padding: '5%',
    
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.bgHeader,
    width: '35%',
    height: 30,
    borderRadius: 5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
  buttonText: {
    color: Colors.light,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonAdd: {
    backgroundColor: Colors.info,
    width: "50%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAddText: {
    color: Colors.light,
    fontSize: 20,
    fontWeight: "bold",
  },





});
