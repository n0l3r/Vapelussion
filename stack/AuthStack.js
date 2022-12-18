import { createStackNavigator } from '@react-navigation/stack';
// Screens
import { Login, Register } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => {
    return (
        <Navigator>
            <Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Screen name="Register" component={Register} options={{ headerShown: false }}  />
            
        </Navigator>
    )
}

export default AuthStack;