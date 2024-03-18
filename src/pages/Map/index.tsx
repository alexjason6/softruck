/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {Platform, Image} from 'react-native';

import data from '../../assets/positions/frontend_data_gps.json';
import MapInfos from '../../components/MapInfos';

import {View, ImageView} from './styles';

const Map: React.FC = () => {
  const polyline = data.courses[0].gps.map(position => ({
    latitude: position.latitude,
    longitude: position.longitude,
  }));
  const framesPerRow = 8; // por exemplo, se você tem 8 direções em cada linha da sprite sheet
  const frameWidth = 128; // largura do quadro da sprite (substitua pelo valor correto)
  const frameHeight = 128; // altura do quadro da sprite (substitua pelo valor correto)

  const getSpritePosition = (direction: number) => {
    // Suponha que a direção é um ângulo de 0 a 360 graus, onde 0 é o norte.
    // Divida a direção pelo número de quadros possíveis para obter a posição.
    // Pode ser necessário ajustar a fórmula dependendo de como as direções estão representadas na sprite sheet.
    const frameIndex = Math.round(
      direction / (360 / (framesPerRow * framesPerRow)),
    );
    const row = Math.floor(frameIndex / framesPerRow);
    const col = frameIndex % framesPerRow;

    return {
      x: col * frameWidth,
      y: row * frameHeight,
      width: frameWidth,
      height: frameHeight,
    };
  };

  const spritePosition = getSpritePosition(data.courses[0].gps[0].direction);

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
        <Marker
          anchor={Platform.OS === 'ios' ? {x: 0, y: 0} : {x: 0.5, y: 0.5}}
          coordinate={{
            latitude: data.courses[0].gps[0].latitude,
            longitude: data.courses[0].gps[0].longitude,
          }}>
          <ImageView style={{overflow: 'hidden'}}>
            <Image
              style={{
                width: 356,
                height: 356,
                position: 'absolute',
                left: -spritePosition.x,
                top: -spritePosition.y,
              }}
              resizeMode="stretch"
              source={require('../../assets/images/vehicles.png')}
            />
          </ImageView>
        </Marker>
      </MapView>
      <MapInfos data={data} />
    </View>
  );
};

export default Map;
