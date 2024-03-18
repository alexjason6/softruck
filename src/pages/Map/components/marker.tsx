import React from 'react';
import {Platform} from 'react-native';
import {Marker} from 'react-native-maps';

interface DataProps {
  data: {
    courses: [
      {
        gps: [{latitude: number; longitude: number; direction: number}];
      },
    ];
  };
}

import {View, Image} from './styles';

const MarkerMap: React.FC<DataProps> = ({data}) => {
  const getSpritePosition = (direction: number) => {
    // Largura de cada sprite
    const spriteWidth = 45;

    // O offset do primeiro sprite na direção 0
    const offsetForZeroDirection = 132;

    // O número de direções disponíveis no sprite sheet
    const numberOfDirections = 8;

    // Calculando a posição do sprite com base na direção.
    // Isto é assumindo que a direção é dada como um ângulo em graus e
    // aumenta no sentido horário com 0 graus apontando para cima.
    const directionNormalized =
      Math.round(direction / (360 / numberOfDirections)) % numberOfDirections;
    const spriteX = offsetForZeroDirection + directionNormalized * spriteWidth;

    return spriteX;
  };

  const spritePosition = getSpritePosition(data.courses[0].gps[0].direction);

  return (
    <Marker
      anchor={Platform.OS === 'ios' ? {x: 0, y: 0} : {x: 0.5, y: 0.5}}
      coordinate={{
        latitude: data.courses[0].gps[0].latitude,
        longitude: data.courses[0].gps[0].longitude,
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
