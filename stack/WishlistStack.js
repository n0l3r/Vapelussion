import { createStackNavigator } from '@react-navigation/stack';
// Screens
import { Wishlist, DetailProduct } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const WishlistStack = () => {
    return (
        <Navigator>
            <Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }} />
            <Screen name="DetailProduct" component={DetailProduct} options={{ headerShown: false }}  />
        </Navigator>
    )
}

export default WishlistStack;