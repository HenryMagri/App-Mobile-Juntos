import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Dimensions, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

import Landing from './pages/landing'
import Cards from './pages/cards'

import CardIcon from './icons/card.png'
import CardIconON from './icons/cardON.png'
import LandingIcon from './icons/home.png'
import LandingIconON from './icons/homeON.png'
import JuntosIcon from './icons/juntos.png'


const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const iconSize = 30;

export default function Routes() {

    return (

        <View style={{ height: '100%', zIndex: 20 }}>

            <NavigationContainer>

                <Tab.Navigator
                    screenOptions={{
                        lazy: true,
                        tabBarStyle: { position: 'absolute', width: screenWidth, height: 0.085 * screenHeight, paddingBottom: 10, borderTopColor: "#c6c6c6", borderTopWidth: 1 },
                        tabBarLabelPosition: "below-icon",
                        tabBarLabelStyle: { fontSize: 10, fontFamily: 'sans-serif', fontWeight: 'regular', color: "black" },
                        headerStyle: { height: 0.16 * screenHeight, borderBottomColor: "#c6c6c6", borderBottomWidth: 1 },
                        headerTitleContainerStyle: { paddingTop: "5%" },
                        headerTitleAlign: 'center',
                        headerTitle: () => (
                            <Image source={JuntosIcon} style={{ width: 0.4 * screenWidth, height: 0.07 * screenHeight }} contentFit="contain" />

                        ),
                    }}
                >

                    <Tab.Screen
                        name="Início"
                        component={Landing}
                        options={{
                            unmountOnBlur: true,
                            tabBarIcon: ({ focused }) => (focused ? <Image source={LandingIconON} style={{ width: iconSize, height: iconSize }} contentFit='cover' /> : <Image source={LandingIcon} style={{ width: iconSize, height: iconSize }} contentFit='cover' />)
                        }}
                    />

                    <Tab.Screen
                        name="Cartões"
                        component={Cards}
                        options={{
                            unmountOnBlur: true,
                            tabBarIcon: ({ focused }) => (focused ? <Image source={CardIconON} style={{ width: iconSize, height: iconSize }} contentFit='cover' /> : <Image source={CardIcon} style={{ width: iconSize, height: iconSize }} contentFit='cover' />)
                        }}
                    />

                </Tab.Navigator>

            </NavigationContainer>

        </View>

    )
}
