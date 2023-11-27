import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';

import { IconButton, Searchbar, Text } from 'react-native-paper';
import SlidingUpPanel from 'rn-sliding-up-panel';

import Map from '../map/Map';

import styles from './styles';

function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [slider, setSlider] = useState(-1);

  useEffect(() => {
    if (slider === -1) this._mapSlide.hide()
    else this._mapSlide.show()
  }, [slider])

  return (
    <View style={styles.container} >
      <Map style={styles.container} setSlider={setSlider}/>
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
      <SlidingUpPanel
        ref={c => this._mapSlide = c}
        draggableRange={styles.sliderRange}
        onBottomReached={() => setSlider(() => -1)}
        snappingPoints={[300, 0]}
        showBackdrop={true}
        backdropOpacity={0}
      >
        <View style={styles.sliderStyle}
        >
          <Image
            source={require('../map/graf.jpg')}
            style={styles.graffitiStyle}
            resizeMode='cover' />
          <Text style={{ color: 'black' }}>AAAAAAAAAAAAAAAA</Text>
        </View>
      </SlidingUpPanel>
      <View>

      </View>
    </View >
  );
}

export default Home;