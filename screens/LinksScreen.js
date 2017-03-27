import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Links',
    },
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        <MapView style={styles.map}
          initialRegion={{
            latitude: 33.7490,
            longitude: -84.3880,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        />

        <Text>
          MAP
        </Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  map: {
    width: 400,
    height: 300,
  },
});
