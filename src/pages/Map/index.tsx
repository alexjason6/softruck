/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import MapView, {Polyline} from 'react-native-maps';

import data from '../../assets/positions/frontend_data_gps.json';
import MapInfos from '../../components/MapInfos';

import {View} from './styles';
import MarkerMap from './components/marker';

const Map: React.FC = () => {
  const [showInfos, setShowInfos] = useState(false);
  const polyline = data.courses[data.courses.length - 1].gps.map(position => ({
    latitude: position.latitude,
    longitude: position.longitude,
  }));

  const changeVisibilityInfos = () => {
    setShowInfos(showInfos ? false : true);
  };

  return (
    <>
      <View />
      <MapView
        region={{
          latitude: data.courses[data.courses.length - 1].gps[0].latitude,
          longitude: data.courses[data.courses.length - 1].gps[0].longitude,
          latitudeDelta:
            Math.max(
              0.01,
              data.courses[data.courses.length - 1].gps[0].latitude,
            ) * 1.5,
          longitudeDelta:
            Math.max(
              0.01,
              data.courses[data.courses.length - 1].gps[0].longitude,
            ) * 1.5,
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
        <MarkerMap infos={data} showInfos={changeVisibilityInfos} />
      </MapView>
      {showInfos && (
        <MapInfos
          placa={data.vehicle.plate}
          endereco={data.courses[data.courses.length - 1].gps[0].address}
          timeStoped={data.total_stop_time}
          quantStop={data.stops}
          courses={data.num_courses}
        />
      )}
    </>
  );
};

export default Map;
