import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';

import Inicio from './src/pages/Inicio';
import Sobre from './src/pages/Sobre';
import ImageSwipe from './src/pages/Midia';
import Mapa from './src/pages/Mapa';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
            screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = 'home';
              return <AntDesign name={iconName} size={size} color={color} />;
            } else if (route.name === 'Sobre') {
              iconName = 'building';
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            } else if (route.name === 'Mídia') {
              iconName = 'network';
              return <Entypo name={iconName} size={size} color={color} />;
            } else if (route.name === 'Mapa') {
              iconName = 'map-marked-alt';
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#797fbb',
          inactiveTintColor: '#c2c4da',
        }}
      >
        <Tab.Screen name="Início" component={Inicio} />
        <Tab.Screen name="Sobre" component={Sobre}/>
        <Tab.Screen name="Mídia" component={ImageSwipe} />
        <Tab.Screen name="Mapa" component={Mapa}/>

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
              fontSize: 25,
              fontWeight: 'bold'
            },
            headerTintColor: '#fff',

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// teste