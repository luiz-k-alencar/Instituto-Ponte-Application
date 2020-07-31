import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';

import Instituto from './SitePages/O-Instituto';
import Seleção from './SitePages/Seleção-de-Alunos';
import Contribua from './SitePages/Contribua';
import Atuação from './SitePages/Como-Atuamos';
import Parceiros from './SitePages/Parceiros';
import Noticias from './SitePages/Noticias';

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="O Instituto" component={Instituto} />
      <Stack.Screen name="Seleção de Alunos" component={Seleção} />
      <Stack.Screen name="Contribua" component={Contribua} />
      <Stack.Screen name="Como Atuamos?" component={Atuação} />
      <Stack.Screen name="Parceiros" component={Parceiros} />
      <Stack.Screen name="Notícias" component={Noticias} />
    </Stack.Navigator>
  );
}


export default function Sobre({navigation}) {
      return (
        <View style={styles.container}>
          <View style={styles.buttonsView}>
            <View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('O Instituto')}>
                <View style={[styles.button, styles.menu]}>
                  <Text style={styles.buttonsText}> O Instituto </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Seleção de Alunos')}>
                <View style={[styles.button, styles.menu]}>
                  <Text style={styles.buttonsText}> Seleção de</Text>
                  <Text style={styles.buttonsText}> Alunos</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Contribua')}>
                <View style={[styles.button, styles.menu]}>
                  <Text style={styles.buttonsText}> Contribua </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.buttonsView} >
            <View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Como Atuamos?')}>
                <View style={[styles.button, styles.menu]}>
                  <Text style={styles.buttonsText}> Como </Text>
                  <Text style={styles.buttonsText}> Atuamos? </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Parceiros')}>
                <View style={[styles.button, styles.menu]}>
                  <Text style={styles.buttonsText}> Parceiros </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Notiícias')}>
                <View style={[styles.button, styles.menu]}>
                  <Text style={styles.buttonsText}> Notícias </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      )
     
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c4da',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  button: {
    width: 130,
    height: 130,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
    }
  },
  menu: {
    backgroundColor: '#797fbb'
  },
  buttonsView: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  buttonsText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  }
});
