import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  Alert,
  ScrollView, 
} from 'react-native';


export default function Inicio({ navigation }) {
  return (

    <View style={styles.container}>
      <ScrollView>
        <View style={styles.ImageContainer}>
          <Image
            source={require('./Imagens/IP.jpg')}
          />
          <Image
            source={require('./Imagens/Resultados.jpg')}
          />
          <Image
            source={require('./Imagens/Valores1.png')}
          />
          <Image
            source={require('./Imagens/Valores2.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  ImageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 50,
  },
  activeDot: {
    color: '#FFF',
    fontSize: 50,
  },
});