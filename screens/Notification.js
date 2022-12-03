import { View, Text, StyleSheet, ScrollView, Dimensions,TextInput,Pressable} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// colors
import Colors from "../utils";

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputGroup}>
          <Icon name="magnify" size={30} color={Colors.secondary} />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor={Colors.secondary}
          />
        </View>
        <Pressable onPress={() => navigation.navigate("Cart")}>
          <Icon name="cart-outline" size={30} color={Colors.secondary} />
        </Pressable>
      </View>

      <ScrollView style={styles.body}>
        {/* Card Info Notification */}
        <View style={styles.content}>
          <View style={styles.cardHorizontal}>
            <View style={styles.cardImgHorizontal}></View>

            <View style={styles.cardContentHorizontal}>
              <Text style={styles.cardTitle}>Title</Text>
              <Text style={styles.cardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Donec id elit non mi porta
                gravida at eget metus.{" "}
              </Text>
            </View>
            <View style={styles.cardFooterHorizontal}>
              <Icon name="close" size={30} color={Colors.secondary} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;

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
  header: {
    flexDirection: "row",
    height: "8%",
    backgroundColor: Colors.bgHeader,
    paddingHorizontal: "4%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? -10 : 0,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.bgDark,
    borderRadius: 30,
    paddingHorizontal: "2%",
    width: "90%",
    height: "60%",
  },
  input: {
    marginLeft: "2%",
    width: "81%",
    fontSize: 18,
    height: "90%",
    color: Colors.secondary,
    backgroundColor: Colors.bgDark,
  },
  content: {
    marginBottom: 20,
  },
  cardHorizontal: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 25,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    marginRight: 10,
    backgroundColor: Colors.bgHeader,
    padding: 15,
  },
  cardImgHorizontal: {
    width: "30%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: Colors.secondary,
  },
  cardContentHorizontal: {
    width: "60%",
    height: "100%",
    paddingLeft: 15,
  },
  cardFooterHorizontal: {
    width: "10%",
    height: "100%",
    alignItems: "flex-end",
  },
  cardTitle: {
    color: Colors.light,
    fontSize: 20,
    fontWeight: "bold",
  },
  cardText: {
    color: Colors.secondary,
    fontSize: 18,
  },
});
