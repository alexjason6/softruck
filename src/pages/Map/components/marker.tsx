import React, {useContext} from 'react';
import {Platform} from 'react-native';
import {Marker} from 'react-native-maps';

import {View, Image} from '../../Maps/components/styles';
import TrackerContext from '../../../contexts/trackerContext';

interface propsElement {
  showInfos: () => void;
}

const MarkerMap: React.FC<propsElement> = ({showInfos}) => {
  const {lastPosition} = useContext(TrackerContext);
  const getSpritePosition = (direction: number) => {
    const spriteWidth = 45;
    const offsetForZeroDirection = 132;
    const numberOfDirections = 8;
    const directionNormalized =
      Math.round(direction / (360 / numberOfDirections)) % numberOfDirections;
    const spriteX = offsetForZeroDirection + directionNormalized * spriteWidth;

    return spriteX;
  };

  const spritePosition = getSpritePosition(lastPosition.direction);

  return (
    <Marker
      anchor={Platform.OS === 'ios' ? {x: 0, y: 0} : {x: 0.5, y: 0.5}}
      onPress={showInfos}
      coordinate={{
        latitude: lastPosition.latitude,
        longitude: lastPosition.longitude,
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
