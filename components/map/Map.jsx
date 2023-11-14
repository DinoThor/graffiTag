import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';

import MapView, { Callout, Marker } from 'react-native-maps';

import * as Location from 'expo-location';

import { ActivityIndicator, Colors } from 'react-native-paper';

function Map({style}) {
  const [location, setLocation] = useState(null);
  
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    location == null
      ?
      <ActivityIndicator animating={true} />
      :
      <View style={{ flex: 1 }}>
        <MapView
          style={style}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
          minZoomLevel={13}
        >
          <Marker
            coordinate={{
              latitude: 39.521322013451424,
              longitude: -0.5118002099712139
            }}
            calloutAnchor={{
              x: 0.5,
              y: 6.5
            }}
          >
            <Callout>
              <View style={{padding: 80}}>
                <Text>Carlos</Text>
                <Text>Carlitos</Text>
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={{
              latitude: 39.52134891074947, 
              longitude: -0.5089627457342959
            }}
          />
        </MapView>
      </View>
  )
}

export default Map;