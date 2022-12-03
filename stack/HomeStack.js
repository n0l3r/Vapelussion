import { createStackNavigator } from '@react-navigation/stack';
// Screens
import { Home, Category, Cart, DetailProduct } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => {
    return (
        <Navigator>
            <Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Screen name="Category" component={Category} options={{ headerShown: false }}  />
            <Screen name="Cart" component={Cart} options={{ headerShown: false }}  />
            <Screen name="DetailProduct" component={DetailProduct} options={{ headerShown: false }}  />
        </Navigator>
    )
}

export default HomeStack;
