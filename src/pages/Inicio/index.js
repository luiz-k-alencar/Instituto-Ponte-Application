import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView, 
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Inicio({ navigation }) {
  return (


    <View style={styles.container}>
      <ScrollView>
        <View style={styles.ImageContainer}>
          <Image style={{width: width}}
            source={require('./Imagens/IP.jpg')}
          />
          <Image style={{width: width}}
            source={require('./Imagens/Resultados.jpg')}
          />
          <Image style={{width: width}}
            source={require('./Imagens/Valores1.png')}
          />
          <Image style={{width: width}}
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
    justifyContent: 'flex-start',
    width: width
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