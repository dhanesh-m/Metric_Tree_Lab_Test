import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/login';
import Home from './screens/home';
import Profile from './screens/profile';

const Stack = createStackNavigator();

function App() {
    const userReducer = useSelector(state => state.UserReducer);
    return (
        <NavigationContainer>
            {userReducer?.isLoggedIn?
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                </Stack.Navigator>
                :
                <Stack.Navigator initialRouteName='Login'>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    )
}

export default App