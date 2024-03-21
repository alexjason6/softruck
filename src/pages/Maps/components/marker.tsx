import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';

import {View, Image} from './styles';
import TrackerContext from '../../../contexts/trackerContext';

interface propsElement {
  data?: {
    direction: number;
    latitude: number;
    longitude: number;
  };
  placa: string;
  distance: number;
  showInfos?: () => void;
}

const MarkerMap: React.FC<propsElement> = ({
  showInfos,
  data,
  placa,
  distance,
}) => {
  const {lastPosition} = useContext(TrackerContext);
  const infos = data ? data : lastPosition;

  function getAdjustedSpriteX(direction: number) {
    let sprit = 0;

    if (direction >= 202.6 && direction <= 247.5) {
      sprit = 0;
    } else if (direction >= 247.6 && direction <= 292.5) {
      sprit = -31.5;
    } else if (direction >= 292.6 && direction <= 337.5) {
      sprit = 96.5;
    } else if (
      (direction >= 337.6 && direction <= 360) ||
      (direction >= 0 && direction <= 22.5)
    ) {
      sprit = 126;
    } else if (direction >= 22.6 && direction <= 67.5) {
      sprit = 175.5;
    } else if (direction >= 67.6 && direction <= 112.5) {
      sprit = 175.5;
    } else if (direction >= 112.6 && direction <= 155.5) {
      sprit = 223.5;
    } else if (direction >= 155.6 && direction <= 202.5) {
      sprit = 265;
    } else {
      sprit = 0;
    }

    return sprit;
  }

  const styles = StyleSheet.create({
    sprit: {
      transform: [{translateX: -getAdjustedSpriteX(infos.direction)}],
      position: 'absolute',
    },
  });

  return (
    <Marker
      onPress={showInfos}
      title={data && placa}
      description={data && `${(distance / 1000).toString().split('.')[0]} kms`}
      isPreselected={data && true}
      coordinate={{
        latitude: infos.latitude,
        longitude: infos.longitude,
      }}>
      <View>
        <Image
          style={styles.sprit}
          resizeMode="stretch"
          source={require('../../../assets/images/vehicles.png')}
        />
      </View>
    </Marker>
  );
};

export default MarkerMap;
