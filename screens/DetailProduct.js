import { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getProductsById } from '../api/productApi';
import { addToCart } from '../api/cartApi';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

import { AuthContext } from '../context/AuthContext';

// colors
import { Colors, screenOptions } from '../utils';

const DetailProduct = ({ navigation, route }) => {

  const { user, baseUrl } = useContext(AuthContext);

  useEffect(() => {
    getProductsById(productId, user.token)
      .then((response) => {
        // console.log(response.data);
        setProduct(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
  }, [navigation])

  const back = () => {
    navigation.goBack();
  }

  

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  }

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const productId = route.params.productId;

  const addToCartHandler = () => {
    const data = {
      user_id: user.id,
      product_id: productId,
      quantity: quantity
    }

    addToCart(data, user.token)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        // console.log(user.token);
        console.log(error);
      })

  }

  return (
    <View style={styles.container}>
      <Header title={product.name} back={back} />

      <ScrollView style={styles.body}>
        {/* Card Info Notification */}
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Image source={{ uri: baseUrl + '/' + product.image }} style={styles.cardImage} />
            </View>
            <View style={styles.cardFooter}>
              <View style={styles.row}>
                <View style={styles.cardFooterLeft}>
                  <Text style={styles.cardTitle}>{product.name}</Text>
                </View>
                <View style={styles.cardFooterRight}>
                  <Text style={styles.cardPrice}>{product.price}</Text>
                </View>
              </View>

              <View style={styles.cardDescription}>
                <Text style={styles.cardDescriptionText}>{product.description}</Text>
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.row}>
          <View style={styles.buttonGroup}>
            <Pressable style={styles.button} onPress={minusQuantity}>
              <Icon name="minus-circle-outline" size={30} color={Colors.secondary} />
            </Pressable>

            <Text style={styles.buttonText}>{quantity}</Text>

            <Pressable style={styles.button} onPress={plusQuantity}>
              <Icon name="plus-circle-outline" size={30} color={Colors.secondary} />
            </Pressable>
          </View>

          <Pressable style={styles.buttonAdd} onPress={addToCartHandler}>
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
  cardImage: {
    width: "100%",
    height: "100%",
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
