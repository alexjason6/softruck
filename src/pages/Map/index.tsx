import React from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {Platform} from 'react-native';

import data from '../../assets/positions/frontend_data_gps.json';
import MapInfos from '../../components/MapInfos';

import {View} from './styles';

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
        style={{flex: 1}}>
        <Polyline coordinates={polyline} />
        <Marker
          anchor={Platform.OS === 'ios' ? {x: 0, y: 0} : {x: 0.5, y: 0.5}}
          coordinate={{
            latitude: data.courses[0].gps[0].latitude,
            longitude: data.courses[0].gps[0].longitude,
          }}
          rotation={Number(data.courses[0].gps[0].direction)}
          style={
            Platform.OS === 'ios' && {
              transform: [
                {
                  rotate: `${data.courses[0].gps[0].direction}deg`,
                },
              ],
            }
          }
        />
      </MapView>
      <MapInfos data={data} />
    </View>
  );
};

export default Map;
