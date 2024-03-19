import React from 'react';
import {Platform} from 'react-native';
import {Marker} from 'react-native-maps';

import {deviceData} from '../../../types/deviceData';

import {View, Image} from './styles';

interface propsElement {
  infos: deviceData;
}

const MarkerMap: React.FC<propsElement> = ({infos}) => {
  const getSpritePosition = (direction: number) => {
    const spriteWidth = 45;
    const offsetForZeroDirection = 132;
    const numberOfDirections = 8;
    const directionNormalized =
      Math.round(direction / (360 / numberOfDirections)) % numberOfDirections;
    const spriteX = offsetForZeroDirection + directionNormalized * spriteWidth;

    return spriteX;
  };

  const spritePosition = getSpritePosition(infos.courses[0].gps[0].direction);

  return (
    <Marker
      anchor={Platform.OS === 'ios' ? {x: 0, y: 0} : {x: 0.5, y: 0.5}}
      coordinate={{
        latitude: infos.courses[0].gps[0].latitude,
        longitude: infos.courses[0].gps[0].longitude,
      }}>
      <View>
        <Image
          position={-spritePosition}
          style={{transform: [{translateX: -spritePosition}]}}
          resizeMode="stretch"
          source={require('../../../assets/images/vehicles.png')}
        />
      </View>
    </Marker>
  );
};

export default MarkerMap;
