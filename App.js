import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import SearchAppBar from './components/Navbar';
import UsersList from './pages/UsersList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
    
    
    
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
