import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inicio from './src/pages/Inicio';
import Sobre from './src/pages/Sobre';
import Mapa from './src/pages/Mapa';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused
              ? require('./assets/icons/home-active.png')
              : require('./assets/icons/home-inactive.png');
          } else if (route.name === 'Sobre') {
            iconName = focused
              ? require('./assets/icons/building-active.png')
              : require('./assets/icons/building-inactive.png');
          } else if (route.name === 'Mapa') {
            iconName = focused
              ? require('./assets/icons/map-active.png')
              : require('./assets/icons/map-inactive.png');
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 25, height: 25 }}
            resizeMode='contain' />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#c2c4da',
        style: {
          backgroundColor: '#797fbb',
          borderTopColor:  '#797fbb',
        }
      }}
    >

      <Tab.Screen name="Início" component={Inicio} />
      <Tab.Screen name="Sobre" component={Sobre} />
      <Tab.Screen name="Mapa" component={Mapa} />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen
          name="Início"
          component={Tabs}
          options={{
            title: 'Instituto Ponte',
            headerStyle: {
              backgroundColor: '#797fbb'
            },
            headerTitleStyle: {
              alignSelf: 'center',
              fontSize: 30,
              fontWeight: 'bold'
            },
            headerTintColor: '#fff',

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}