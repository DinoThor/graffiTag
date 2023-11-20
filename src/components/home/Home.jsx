import React, { useState } from 'react';

import { View, Dimensions, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { IconButton, Props, Searchbar } from 'react-native-paper';
import Map from '../map/Map';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

function Home({ navigation }) {
  // const navigation = useNavigation<NavigationProp>()
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container} >
      <Map style={styles.container} />
      <View style={styles.addButton}>
        <IconButton
          icon='plus-circle'
          mode='outlined'
          size={40}
          iconColor='#666666'
        />

      </View>
      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
          mode='bar'
          right={() =>
            <IconButton
              icon='menu'
              onPress={() => navigation.openDrawer()} />
          }
        />
      </View>
    </View >
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStype: {
    width: '100%',
    height: '100%',
  },
  addButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    position: 'absolute',
    top: height * 0.065,
    left: width * 0.05,
    right: width * 0.05
  }
});