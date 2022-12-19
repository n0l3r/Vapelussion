import { View, Text, StyleSheet, ScrollView, Dimensions, Pressable, FlatList, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

// colors
import { Colors, screenOptions } from '../utils';

import { AuthContext } from '../context/AuthContext';
import { useEffect, useContext, useState } from "react";
import { getNotification, deleteNotification } from "../api/notificationApi";

const Notification = ({ navigation }) => {

  const { user, baseUrl } = useContext(AuthContext);

  const [notification, setNotification] = useState([]);

  useEffect(() => {
    getNotification(user.id, user.token)
      .then((response) => {
        console.log(response.data);
        setNotification(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteNotificationhandler = (id) => {
    deleteNotification(id, user.token)
      .then((response) => {
        // delete from cart
        const newNotification = notification.filter((item) => item.id !== id);
        setNotification(newNotification);
      }
      )
      .catch((error) => {
        console.log(error);
      }
      );
  };

  const renderItem = (item) => {
    return (
      <View style={styles.cardHorizontal}>
            <View style={styles.cardImgHorizontal}>
              <Icon name="bell-outline" size={70} color={Colors.info} />
            </View>

            <View style={styles.cardContentHorizontal}>
              <Text style={styles.cardTitle}>Checkout</Text>
              <Text style={styles.cardText}>
                {item.message}
              </Text>
            </View>
            <Pressable style={styles.cardFooterHorizontal} onPress={() => deleteNotificationhandler(item.id)}>
              <Icon name="close" size={30} color={Colors.secondary} />
            </Pressable>
          </View>
    )};


  return (
    <View style={styles.container}>
      <Header title={"Notification"} />
      <FlatList style={styles.body} data={notification} renderItem={({ item }) => renderItem(item)} numColumns={2} keyExtractor={item => item.id} />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.bgDark,
    paddingBottom: '15%'
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
    justifyContent: "center",
    alignItems: "center",
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
