import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Instituto from './SitePages/O-Instituto';
import Seleção from './SitePages/Seleção-de-Alunos';
import Contribua from './SitePages/Contribua';
import Atuação from './SitePages/Como-Atuamos';
import Parceiros from './SitePages/Parceiros';
import Noticias from './SitePages/Noticias';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsView}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('O Instituto')}>
          <View style={[styles.button, styles.menu]}>
            <Text style={styles.buttonsText}> O Instituto </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Seleção')}>
          <View style={[styles.button, styles.menu]}>
            <Text style={styles.buttonsText}> Seleção de</Text>
            <Text style={styles.buttonsText}> Alunos</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Contribua')}>
          <View style={[styles.button, styles.menu]}>
            <Text style={styles.buttonsText}> Contribua </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonsView}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Atuação')}>
          <View style={[styles.button, styles.menu]}>
          <Text style={styles.buttonsText}> Como</Text>
            <Text style={styles.buttonsText}> Atuamos?</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Parceiros')}>
          <View style={[styles.button, styles.menu]}>
            <Text style={styles.buttonsText}> Parceiros</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Notícias')}>
          <View style={[styles.button, styles.menu]}>
            <Text style={styles.buttonsText}> Notícias </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function Sobre() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="O Instituto" component={Instituto} />
      <Stack.Screen name="Seleção" component={Seleção} />
      <Stack.Screen name="Contribua" component={Contribua} />
      <Stack.Screen name="Atuação" component={Atuação} />
      <Stack.Screen name="Parceiros" component={Parceiros} />
      <Stack.Screen name="Notícias" component={Noticias} />
    </Stack.Navigator>
  );
}

export default Sobre;

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
