import React from 'react';
import moment from 'moment';
import * as RNLocalize from 'react-native-localize';
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
  const currentLocale = RNLocalize.getLocales()[0].languageCode;
  const messages =
    currentLocale === 'es'
      ? require('../../assets/locales/es.json')
      : currentLocale === 'en'
      ? require('../../assets/locales/en.json')
      : require('../../assets/locales/pt_br.json');

  return (
    <Container>
      <View>
        <Text plate>{placa}</Text>
        <Text itemData>{speed} km/h</Text>
        <Text itemData>{date}</Text>
      </View>

      <View halfHr />

      <Text address>
        <EntypoIcon name="direction" size={15} />
        {messages.startAddress}:{'\n'}
        {enderecoInicial}
      </Text>
      <Text address>
        <EntypoIcon name="direction" size={15} /> {messages.finishAddress}:
        {'\n'}
        {enderecoFinal}
      </Text>
    </Container>
  );
};

export default MapInfosCourses;
