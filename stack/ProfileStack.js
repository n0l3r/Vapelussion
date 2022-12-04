import { createStackNavigator } from '@react-navigation/stack';
// Screens
import { Profile, Settings, HistoryOrder } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const ProfileStack = () => {
    return (
        <Navigator>
            <Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Screen name="Settings" component={Settings} options={{ headerShown: false }}  />
            <Screen name="HistoryOrder" component={HistoryOrder} options={{ headerShown: false }}  />
        </Navigator>
    )
}

export default ProfileStack;