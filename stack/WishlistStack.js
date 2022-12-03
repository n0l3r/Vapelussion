import { createStackNavigator } from '@react-navigation/stack';
// Screens
import { Wishlist, Cart } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const WishlistStack = () => {
    return (
        <Navigator>
            <Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }} />
            <Screen name="Cart" component={Cart} options={{ headerShown: false }}  />
        </Navigator>
    )
}

export default WishlistStack;