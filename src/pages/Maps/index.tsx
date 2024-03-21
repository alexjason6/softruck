import React, {useState, useContext} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import TrackerContext from '../../contexts/trackerContext';

import LastPosition from './LastPosition';
import Courses from './Courses';

const Map: React.FC = () => {
  const {loading} = useContext(TrackerContext);
  const [showCourses, setShowCourses] = useState(false);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={'#7248d0'} />
      </View>
    );
  }

  const changeVisibilityComponents = () => {
    setShowCourses(!showCourses);
  };

  return (
    <View style={styles.container}>
      {showCourses ? (
        <Courses show={changeVisibilityComponents} />
      ) : (
        <LastPosition show={changeVisibilityComponents} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map;
