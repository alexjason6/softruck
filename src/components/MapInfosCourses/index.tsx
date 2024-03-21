import React, {useState} from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');
import {Container, View, EntypoIcon, Text} from './styles';

interface propsElement {
  placa: string;
  enderecoInicial: string;
  enderecoFinal: string;
  timeStoped: number;
  quantStop: number;
  courses: number;
  maxSpeed: number;
  avgSpeed: number;
  timestampLastPosition: number;
  speed: number;
  distance: number;
  image: string;
}

const MapInfosCourses: React.FC<propsElement> = ({
  placa,
  enderecoInicial,
  enderecoFinal,
  timestampLastPosition,
  speed,
}) => {
  const convertUnixToDate = moment.unix(timestampLastPosition);
  const setDateUTC = moment(convertUnixToDate)
    .utcOffset(0)
    .format('YYYY-MM-DD HH:mm:ss');
  const date = moment(setDateUTC).format('DD/MM/YYYY - HH:mm');

  return (
    <Container>
      <View>
        <Text plate>{placa}</Text>
        <Text itemData>{speed} km/h</Text>
        <Text itemData>{date}</Text>
      </View>

      <View halfHr />

      <Text address>
        <EntypoIcon name="direction" size={15} /> Endereço inicial:{'\n'}
        {enderecoInicial}
      </Text>
      <Text address>
        <EntypoIcon name="direction" size={15} /> Endereço final:{'\n'}
        {enderecoFinal}
      </Text>
    </Container>
  );
};

export default MapInfosCourses;
