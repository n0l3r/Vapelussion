import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import { Home, Wishlist, Notification, Profile, Cart } from './screens';
// utils
import Colors from './utils';

const { Screen, Navigator } = createBottomTabNavigator();

const isVisible = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    const pageVisible = ['Home', 'Wishlist', 'Notification', 'Profile'];
    return pageVisible.includes(routeName);
}

const App = () => {

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ExpoStatusBar backgroundColor={Colors.bgHeader} style="light" />
      </SafeAreaView>

      <NavigationContainer>
        <Navigator screenOptions={
          ({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#94A0AD',
            tabBarStyle: {
              display: isVisible(route) ? 'flex' : 'none',
              paddingVertical: 5,
              height: 70,
              backgroundColor: Colors.bgHeader,
              position: 'absolute',
              bottom: 0,
              borderTopWidth: 0,
            }
          })

        }>
          <Screen name="HomeNav" component={HomeNav} options={homeOptions} />
          <Screen name="Wishlist" component={Wishlist} options={wishlistOptions} />
          <Screen name="Notification" component={Notification} options={notificationOptions} />
          <Screen name="Profile" component={Profile} options={profileOptions} />
        </Navigator>
      </NavigationContainer>
    </View>


  )
}


const homeNav = createStackNavigator();

const HomeNav = () => {
  return (
    <homeNav.Navigator>
      <homeNav.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <homeNav.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
    </homeNav.Navigator>
  )
}


const homeOptions = {
  tabBarIcon: ({ focused, color }) => (
    <Icon name={focused ? 'home' : 'home-outline'} color={color} size={30} />
  )
}

const wishlistOptions = {
  tabBarIcon: ({ focused, color }) => (
    <Icon name={focused ? 'heart' : 'heart-outline'} color={color} size={30} />
  )
}

const notificationOptions = {
  tabBarIcon: ({ focused, color }) => (
    <Icon name={focused ? 'bell' : 'bell-outline'} color={color} size={30} />
  )
}

const profileOptions = {
  tabBarIcon: ({ focused, color }) => (
    <Icon name={focused ? 'account' : 'account-outline'} color={color} size={30} />
  )
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgHeader,
    marginTop: StatusBar.currentHeight,
  },


});
