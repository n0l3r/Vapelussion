import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, StatusBar, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import { Home, Wishlist, Notification, Profile } from './screens';
// utils
import Colors from './utils';

const { Screen, Navigator } = createBottomTabNavigator();

const App = () => {

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ExpoStatusBar backgroundColor={Colors.bgHeader} style="light" />
      </SafeAreaView>
      <View style={styles.header}>
        <View style={styles.inputGroup}>
          <Icon name="magnify" size={30} color={Colors.secondary} />
          <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={Colors.secondary} />
        </View>
        <Icon name="cart-outline" size={30} color={Colors.secondary} />
      </View>
      <NavigationContainer>
        <Navigator screenOptions={screenOptions}>
          <Screen name="Home" component={Home} options={homeOptions} />
          <Screen name="Wishlist" component={Wishlist} options={wishlistOptions} />
          <Screen name="Notification" component={Notification} options={notificationOptions} />
          <Screen name="Profile" component={Profile} options={profileOptions} />
        </Navigator>
      </NavigationContainer>
    </View>


  )
}



const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#94A0AD',
  tabBarStyle: {
    paddingVertical: 5,
    height: 70,
    backgroundColor: Colors.bgHeader,
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 0,
  },
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
  header: {
    flexDirection: 'row',
    height: '8%',
    backgroundColor: Colors.bgHeader,
    paddingHorizontal: '4%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? -10 : 10,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgDark,
    borderRadius: 30,
    paddingHorizontal: '2%',
    width: '90%',
    height: '60%',
  },
  input: {
    marginLeft: '2%',
    width: '81%',
    fontSize: 18,
    height: '90%',
    color: Colors.secondary,
    backgroundColor: Colors.bgDark,
  },

});
