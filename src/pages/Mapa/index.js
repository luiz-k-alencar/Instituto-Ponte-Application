import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions,Image } from 'react-native';
import MapView from 'react-native-maps';

const { height, width } = Dimensions.get('window');

export default class Mapa extends Component {
  state = {
    places: [
      {
        id: 1,
        title: 'Instituto Ponte Pedagógico',
        description: 'Instituto João XXIII, 2º Andar',
        latitude: -20.3073323,
        longitude: -40.3107429,
      },
      {
        id: 2,
        title: 'Instituto Ponte Escritório',
        description: 'Ed. Centro Empresarial, Torre Central, sala 604',
        latitude: -20.2767843,
        longitude: -40.3006037,
      }
    ]
  };

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  };

  render() {
    const { latitude, longitude } = this.state.places[0];

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.mapView = map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.034,
            longitudeDelta: 0.025,
          }}
          style={styles.MapView}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          showsPointsOfInterest={false}
          showsBuildings={false}
          onMapReady={this._mapReady}
        >
          {this.state.places.map(place => (
            <MapView.Marker
              ref={mark => place.mark = mark}
              title={place.title}
              description={place.description}
              key={place.id}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
            />
          ))}
        </MapView>
        <ScrollView
          style={styles.placesContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={e => {
            const scrolled = e.nativeEvent.contentOffset.x;
            const { width } = Dimensions.get('window');
            
            const place = (scrolled > 0)
              ? 1
              : 0;

              const { latitude, longitude, mark } = this.state.places[place];

              this.mapView.animateToCoordinate({
                latitude,
                longitude
              }, 1000);

              setTimeout(() => {
                mark.showCallout()
              }, 1000)
          }}
        >
          {this.state.places.map(place => (
            <View key={place.id} style={styles.place}>
              <Text style={styles.title}>{place.title}</Text>
              <Text style={styles.description}>{place.description}</Text>
              <Image source={require('./Imagens/icon.png')}/>
            </View>           
          ))}
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  MapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },

  placesContainer: {
    width: '100%',
    maxHeight: 200
  },

  place: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'transparent',
  },

  description: {
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
});
