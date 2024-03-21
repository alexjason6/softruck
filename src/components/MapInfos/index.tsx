import React, {useState} from 'react';
import * as RNLocalize from 'react-native-localize';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');
import {
  Container,
  View,
  Button,
  Image,
  FiIcon,
  EntypoIcon,
  IoniconsIcon,
  MCIcon,
  Text,
} from './styles';

interface propsElement {
  placa: string;
  endereco: string;
  timeStoped: number;
  quantStop: number;
  courses: number;
  maxSpeed: number;
  avgSpeed: number;
  timestampLastPosition: number;
  speed: number;
  distance: number;
  image: string;
  showInfos: () => void;
}

const MapInfos: React.FC<propsElement> = ({
  placa,
  endereco,
  timeStoped,
  quantStop,
  courses,
  maxSpeed,
  avgSpeed,
  timestampLastPosition,
  speed,
  distance,
  image,
  showInfos,
}) => {
  const [openedInfos, setOpenedInfos] = useState(false);
  const convertUnixToDate = moment.unix(timestampLastPosition);
  const setDateUTC = moment(convertUnixToDate)
    .utcOffset(0)
    .format('YYYY-MM-DD HH:mm:ss');
  const date = moment(setDateUTC).fromNow();
  const converterTempoParado = (segundos: number) => {
    const minutos = segundos / 60;
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = Math.floor(minutos % 60);
    const segundosRestantes = Math.floor(segundos % 60);

    return `${horas}:${minutosRestantes}:${segundosRestantes}`;
  };

  const currentLocale = RNLocalize.getLocales()[0].languageCode;
  const messages =
    currentLocale === 'es'
      ? require('../../assets/locales/es.json')
      : currentLocale === 'en'
      ? require('../../assets/locales/en.json')
      : require('../../assets/locales/pt_br.json');

  const changeOpenedInfos = () => {
    setOpenedInfos(openedInfos ? false : true);
  };

  return (
    <Container sizeInfo={openedInfos}>
      <Button change onPress={changeOpenedInfos}>
        <FiIcon name={!openedInfos ? 'chevron-up' : 'chevron-down'} size={25} />
      </Button>
      <Text plate>{placa}</Text>

      <Text address>
        <EntypoIcon name="direction" size={15} /> {endereco}
      </Text>
      <View>
        <View item>
          <MCIcon name="car-connected" size={20} />
          <Text titleItem>{messages.lastPosition}</Text>
          <Text itemData>{date}</Text>
        </View>
        <View item>
          <IoniconsIcon name="speedometer" size={20} />
          <Text titleItem>{messages.speed}</Text>
          <Text itemData>{speed} km/h</Text>
        </View>
        <View item>
          <Image source={{uri: image}} />
        </View>
      </View>

      <View hr />

      <Text>{messages.titleSectionInfos}</Text>

      <View>
        <View item infos3>
          <IoniconsIcon name="speedometer-outline" size={20} />
          <Text titleItem>{messages.maxSpeed}</Text>
          <Text itemData>{maxSpeed.toFixed(0)} km/h</Text>
        </View>
        <View item infos3>
          <IoniconsIcon name="speedometer" size={20} />
          <Text titleItem>{messages.avgSpeed}</Text>
          <Text itemData>{avgSpeed} km/h</Text>
        </View>
        <View item infos3>
          <MCIcon name="map-marker-distance" size={20} />
          <Text titleItem>{messages.totalDistance}</Text>
          <Text itemData>{String(distance / 1000).split('.')[0]} km</Text>
        </View>
      </View>

      <View hr halfHr />

      <View>
        <View item infos2>
          <IoniconsIcon name="stopwatch" size={20} />
          <Text titleItem>{messages.stopedTime}</Text>
          <Text itemData>{converterTempoParado(timeStoped)}</Text>
        </View>
        <View item infos2>
          <IoniconsIcon name="pause" size={20} />
          <Text titleItem>{messages.stops}</Text>
          <Text itemData>{quantStop}</Text>
        </View>
        <View item infos2>
          <IoniconsIcon name="list" size={20} />
          <Text titleItem>{messages.courses}</Text>
          <Text itemData>{courses}</Text>
        </View>
      </View>

      <View hr halfHr />

      <View>
        <Button
          courses
          onPress={() => {
            changeOpenedInfos();
            showInfos();
          }}>
          <Text courses>{messages.showCourses}</Text>
        </Button>
      </View>
    </Container>
  );
};

export default MapInfos;
