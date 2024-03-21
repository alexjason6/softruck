/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

import TrackerContext from '../../../contexts/trackerContext';

import MapInfosCourses from '../../../components/MapInfosCourses';
import MarkerMap from '../components/marker';

import {SafeAreView, View, ChangeCourse, Item, Icon} from './styles';

const Courses: React.FC = () => {
  const {vehicle, courses, loading} = useContext(TrackerContext);
  const [courseIndex, setCourseIndex] = useState(0);
  const [gpsIndex, setGpsIndex] = useState(0);
  const course = courses[courseIndex];
  const positionActive = course.gps[gpsIndex];

  const changeCourse = (value: number) => {
    if (courseIndex >= 0 && courseIndex < courses.length - 1) {
      setGpsIndex(0);
      setCourseIndex(courseIndex + value);
    } else {
      return null;
    }
  };

  const updatePosition = () => {
    if (gpsIndex < course.gps.length - 1) {
      setGpsIndex(gpsIndex + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updatePosition, 2000);

    return () => clearInterval(intervalId);
  }, [gpsIndex, courseIndex]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="small" color={'#7248d0'} />
      </View>
    );
  }

  const polyline = course.gps.map(position => ({
    latitude: position.latitude,
    longitude: position.longitude,
  }));

  return (
    <>
      <SafeAreView />
      <MapView
        region={{
          latitude: positionActive.latitude,
          longitude: positionActive.longitude,
          latitudeDelta: Math.max(0.01, positionActive.latitude) * 1.5,
          longitudeDelta: Math.max(0.01, positionActive.longitude) * 1.5,
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
        <MarkerMap
          data={positionActive}
          distance={course.distance}
          placa={vehicle.vehicle.plate}
        />
      </MapView>
      <ChangeCourse>
        <Item onPress={() => changeCourse(-1)}>
          <Icon name={'chevron-left'} size={30} />
        </Item>

        <Item onPress={() => changeCourse(1)}>
          <Icon name={'chevron-right'} size={30} />
        </Item>
      </ChangeCourse>
      <MapInfosCourses
        placa={vehicle.vehicle.plate}
        enderecoInicial={course.gps[0].address}
        enderecoFinal={course.gps[course.gps.length - 1].address}
        timestampLastPosition={course.gps[gpsIndex].acquisition_time_unix}
        speed={Number(course.gps[gpsIndex].speed.toFixed(0))}
      />
    </>
  );
};

export default Courses;
