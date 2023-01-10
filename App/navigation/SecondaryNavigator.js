import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { navigationRef } from './RootNavigation';
import { store } from '../redux/store';
import Dashboard from '../screens/TabsScreens/DashBoard';
import HomeScreen from '../screens/TabsScreens/HomeScreen';
import ProfileScreen from '../screens/TabsScreens/ProfileScreen';
import SettingScreen from '../screens/TabsScreens/SettingScreen';

const Stack = createNativeStackNavigator();
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};

export default function SecondaryNavigator() {
    return (
        <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator screenOptions={screenOptions}>
                    <Stack.Screen name="dashboard" component={Dashboard} />
                    <Stack.Screen name="homescreen" component={HomeScreen} />
                    <Stack.Screen name="profile" component={ProfileScreen} />
                    <Stack.Screen name="setting" component={SettingScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}