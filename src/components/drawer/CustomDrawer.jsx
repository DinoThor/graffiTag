
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import { Button, Icon, IconButton } from 'react-native-paper';

import Divider from './Divider';

function CustomDrawer(props) {
    const [darkTheme, setDarkTheme] = useState(false);
    const [selectedDrawerItem, setSelectedDrawerItem] = useState(0);

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
            <View style={styles.container}>
                
                {/* Top part */}
                <View>
                    <View>
                        <View style={styles.profile}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon source={'account-circle'} size={60} />
                                <Button onPress={() => a = 1}>Iniciar sesion</Button>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                                <Icon source={'spray'} size={20} />
                                <Text style={{ marginLeft: 10, color: 'white', fontStyle: 'mono' }}>5</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Divider/>
                        <DrawerItem label="Mapa" focused={selectedDrawerItem === 0}/>
                        <DrawerItem label="Mis graffitis" focused={selectedDrawerItem === 1}/>
                        <DrawerItem label="Ranking" focused={selectedDrawerItem === 2}/>
                    </View>
                </View>

                {/* Bottom Part */}
                <View style={styles.bottomLayout}>
                    <IconButton icon={'cog'} />
                    <IconButton
                        icon={!darkTheme ? 'white-balance-sunny' : 'moon-waning-crescent'}
                        onPress={() => setDarkTheme(() => !darkTheme)}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15
    },
    bottomLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    }
  });

export default CustomDrawer;