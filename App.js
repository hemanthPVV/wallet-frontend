import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import SearchAppBar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import UsersList from './pages/UsersList';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Main" options={{ headerShown: false }}>
          {() => (
            <View style={{ flex: 1 }}>
              <SearchAppBar />
              <View style={{ flex: 1 ,marginTop:-500}}>
                <SignIn /> 
              </View>
              
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} /> 
        <Stack.Screen name="UsersList" component={UsersList} /> 
        <Stack.Screen name="Dashboard" component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
