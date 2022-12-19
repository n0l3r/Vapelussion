import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStack from './stack/HomeStack';
import WishlistStack from './stack/WishlistStack';
import NotificationStack from './stack/NotificationStack';
import ProfileStack from './stack/ProfileStack';
import Login from './screens/Login';
import Register from './screens/Register';

import { Colors, screenOptions } from './utils';
import AuthStack from './stack/AuthStack';

import { AuthContext } from './context/AuthContext';
import { AuthProvider } from './context/AuthContext';


const { Screen, Navigator } = createBottomTabNavigator();

const Stack = createStackNavigator();




const App = () => {

  return (
    <View style={styles.container}>
      <AuthProvider>
      <SafeAreaView>
        <ExpoStatusBar backgroundColor={Colors.bgHeader} style="light" />
      </SafeAreaView>

      
        <NavigationContainer>
          <Navigator screenOptions={screenOptions}>
            <Screen name="AuthStack" component={AuthStack} options={authOptions} />
            <Screen name="HomeStack" component={HomeStack} options={homeOptions} />
            <Screen name="WishlistStack" component={WishlistStack} options={wishlistOptions} />
            <Screen name="NotificationStack" component={NotificationStack} options={notificationOptions} />
            <Screen name="ProfileStack" component={ProfileStack} options={profileOptions} />
          </Navigator>
        </NavigationContainer>
      </AuthProvider>


    </View>
  )
}

const authOptions = {
  tabBarButton: () => null,
  tabBarStyle: { display: 'none' }
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
