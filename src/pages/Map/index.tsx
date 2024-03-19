/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MapView, {Polyline} from 'react-native-maps';

import data from '../../assets/positions/frontend_data_gps.json';
import MapInfos from '../../components/MapInfos';

import {View} from './styles';
import MarkerMap from './components/marker';

const Map: React.FC = () => {
  const polyline = data.courses[0].gps.map(position => ({
    latitude: position.latitude,
    longitude: position.longitude,
  }));

  return (
    <View>
      <MapView
        region={{
          latitude: data.courses[0].gps[0].latitude,
          longitude: data.courses[0].gps[0].longitude,
          latitudeDelta: Math.max(0.01, data.courses[0].gps[0].latitude) * 1.5,
          longitudeDelta:
            Math.max(0.01, data.courses[0].gps[0].longitude) * 1.5,
        }}
        loadingEnabled={true}
        loadingIndicatorColor="#7248d0"
        showsCompass={false}
        zoomControlEnabled={true}
        zoomTapEnabled={true}
        showsTraffic={true}
        rotateEnabled={false}
        style={{flex: 1}}>
        <Polyline
          coordinates={polyline}
          strokeWidth={4}
          strokeColor="#0c71c3"
        />
        <MarkerMap infos={data} />
      </MapView>
      <MapInfos placa={data.vehicle.plate} />
    </View>
  );
};

export default Map;
