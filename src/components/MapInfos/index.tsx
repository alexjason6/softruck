import React, {useState} from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');
import {
  Container,
  View,
  CloseButton,
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

  const changeOpenedInfos = () => {
    setOpenedInfos(openedInfos ? false : true);
  };

  return (
    <Container sizeInfo={openedInfos}>
      <CloseButton onPress={changeOpenedInfos}>
        <FiIcon name={!openedInfos ? 'chevron-up' : 'chevron-down'} size={25} />
      </CloseButton>
      <Text plate>{placa}</Text>

      <Text address>
        <EntypoIcon name="direction" size={15} /> {endereco}
      </Text>
      <View>
        <View item>
          <MCIcon name="car-connected" size={20} />
          <Text titleItem>Última posição</Text>
          <Text itemData>{date}</Text>
        </View>
        <View item>
          <IoniconsIcon name="speedometer" size={20} />
          <Text titleItem>Velocidade</Text>
          <Text itemData>{speed} km/h</Text>
        </View>
        <View item>
          <Image source={{uri: image}} />
        </View>
      </View>

      <View hr />

      <Text>Informações das últimas posições</Text>
      <View>
        <View item infos2>
          <IoniconsIcon name="stopwatch" size={20} />
          <Text titleItem>Tempo parado</Text>
          <Text itemData>{converterTempoParado(timeStoped)}</Text>
        </View>
        <View item infos2>
          <IoniconsIcon name="pause" size={20} />
          <Text titleItem>Quantidade paradas</Text>
          <Text itemData>{quantStop}</Text>
        </View>
        <View item infos2>
          <IoniconsIcon name="list" size={20} />
          <Text titleItem>Quantidade viagens</Text>
          <Text itemData>{courses}</Text>
        </View>
      </View>

      <View hr halfHr />

      <View>
        <View item infos3>
          <IoniconsIcon name="speedometer-outline" size={20} />
          <Text titleItem>Velocidade máxima</Text>
          <Text itemData>{maxSpeed.toLocaleString().slice(0, 2)} km/h</Text>
        </View>
        <View item infos3>
          <IoniconsIcon name="speedometer" size={20} />
          <Text titleItem>Velocidade média</Text>
          <Text itemData>{avgSpeed} km/h</Text>
        </View>
        <View item infos3>
          <MCIcon name="map-marker-distance" size={20} />
          <Text titleItem>Distancia total percorrida</Text>
          <Text itemData>{String(distance / 1000).split('.')[0]} km</Text>
        </View>
      </View>
    </Container>
  );
};

export default MapInfos;
