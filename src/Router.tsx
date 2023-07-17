import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './pages/Products';
import Details from './pages/Details';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>


        <Stack.Screen
          name='LoginPage'
          component={Login}
          options={{
            headerShown:false,
            title: 'Login',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' },
          }}
        />

        <Stack.Screen
          name='ProductsPage'
          component={Products}
          options={{
            headerShown:false,
            title: 'Dükkan',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' },
          }}
        />
        <Stack.Screen
          name='DetailsPage'
          component={Details}
          options={{
            headerShown:false,
            title: 'Dükkan',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default Router;