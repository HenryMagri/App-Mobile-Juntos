import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Image } from 'expo-image'; 
import Routes from "./src/routes";
import LoadingIcon from "./src/icons/juntos.png";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function App() {

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true); 
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {!shouldRender && (
        <View style={styles.loadingContainer}>
          <Image
            source={LoadingIcon}
            style={styles.loadingImage}
            resizeMode="contain"
          />
        </View>
      )}

      {shouldRender && (
        <Routes />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingImage: {
    width: screenWidth * 0.5, 
    height: screenHeight * 0.5, 
  },
});
