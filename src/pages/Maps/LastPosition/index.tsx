import React, {useState, useContext} from 'react';

import {StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

import TrackerContext from '../../../contexts/trackerContext';

import MapInfos from '../../../components/MapInfos';
import MarkerMap from '../components/marker';

import {SafeAreView} from './styles';

interface propsElement {
  show: () => void;
}

const LastPosition: React.FC<propsElement> = ({show}) => {
  const {vehicle, lastPosition, courses} = useContext(TrackerContext);
  const [showInfos, setShowInfos] = useState(false);

  const polyline = courses[courses?.length - 1].gps.map(position => ({
    latitude: position.latitude,
    longitude: position.longitude,
  }));

  const changeVisibilityInfos = () => {
    setShowInfos(showInfos ? false : true);
  };

  const changeVisibilityInfosAndComponents = () => {
    show();
  };

  return (
    <>
      <SafeAreView />
      <MapView
        region={{
          latitude: lastPosition.latitude,
          longitude: lastPosition.longitude,
          latitudeDelta: Math.max(0.01, lastPosition.latitude) * 1.5,
          longitudeDelta: Math.max(0.01, lastPosition.longitude) * 1.5,
        }}
        loadingEnabled={true}
        loadingIndicatorColor="#7248d0"
        showsCompass={false}
        zoomControlEnabled={true}
        zoomTapEnabled={true}
        showsTraffic={true}
        rotateEnabled={false}
        style={styles.container}>
        <Polyline
          coordinates={polyline}
          strokeWidth={4}
          strokeColor="#0c71c3"
        />
        <MarkerMap showInfos={changeVisibilityInfos} />
      </MapView>
      {showInfos && (
        <MapInfos
          placa={vehicle.vehicle.plate}
          endereco={lastPosition.address}
          timeStoped={vehicle.total_stop_time}
          quantStop={vehicle.stops}
          courses={vehicle.num_courses}
          maxSpeed={vehicle.speed_max}
          avgSpeed={vehicle.speed_avg}
          timestampLastPosition={lastPosition.acquisition_time_unix}
          speed={lastPosition.speed}
          distance={vehicle.total_distance}
          image={vehicle.vehicle.picture.address}
          showInfos={changeVisibilityInfosAndComponents}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LastPosition;
