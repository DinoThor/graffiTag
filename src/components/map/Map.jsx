import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ActivityIndicator } from 'react-native-paper';
import * as Location from 'expo-location';

// ========= AWS API ====================================
import { API } from 'aws-amplify';
import { getAllMarkers } from '../../graphql/queries';
// ======================================================

function Map({ setSlider }) {
  const [location, setLocation] = useState([]);
  const [data, setData]         = useState([])

  async function fetchMarkers() {
    try {
      const MarkersData = await API.graphql({
        query: getAllMarkers
      });
      setData(() => MarkersData.data.getAllMarkers)
    } catch (error) {
      console.log('error fetching markers')
    }
  }

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(() => location);
  }

  useEffect(() => {
    getLocation();
    fetchMarkers();
  }, []);

  return (
    location.length == 0
      ?
      //TODO: Cambiar esto por un splash screen
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator animating={true} size={70}/>
      </View>
      :
      <View style={{ flex: 1 }}>
        <MapView
          style={{flex: 1}}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
          minZoomLevel={13}
        >
          {
            data.map((marker, key) => {
              return (
                <Marker 
                  key={key}
                  coordinate={{
                    latitude: marker.latLon[1],
                    longitude: marker.latLon[0]
                  }}
                  onPress={() => setSlider(() => key)}
                />
              )
            })
          }
        </MapView>
      </View>
  )
}

export default Map;