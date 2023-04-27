
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'; 


export default function App() {
    const [origin,setOrigin] = React.useState({
      latitude:  20.07607038194086,  
      longitude: -102.27207159182097,
    })
  return (
    <View style={styles.container}>
      <MapView style = {styles.map}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.09
      }}
      />
      
    </View>
  );

  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },

  map:{
    width: '100%',
    height:'100%'
    
  }
});
