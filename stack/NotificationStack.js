import { createStackNavigator } from '@react-navigation/stack';
// Screens
import { Notification, Cart } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const NotificationStack = () => {
    return (
        <Navigator>
            <Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Screen name="Cart" component={Cart} options={{ headerShown: false }}  />
        </Navigator>
    )
}

export default NotificationStack;