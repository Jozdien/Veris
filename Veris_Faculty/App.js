import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main';
import News from './components/News';
import Events from './components/Events';
import Login from './components/Login';
import Profile from './components/Profile';
import Attendance from './components/Attendance';
import Marks from './components/Marks';
import Notifications from './components/Notifications';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen name="Marks" component={Marks} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
