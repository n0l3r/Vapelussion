import { createStackNavigator } from '@react-navigation/stack';
// Screens
import { Profile, Cart } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const ProfileStack = () => {
    return (
        <Navigator>
            <Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Screen name="Cart" component={Cart} options={{ headerShown: false }}  />
        </Navigator>
    )
}

export default ProfileStack;