import React, {useState} from 'react';

import {
  Container,
  View,
  CloseButton,
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
}

const MapInfos: React.FC<propsElement> = ({
  placa,
  endereco,
  timeStoped,
  quantStop,
  courses,
}) => {
  const [openedInfos, setOpenedInfos] = useState(false);
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
          <IoniconsIcon name="stopwatch" size={20} />
          <Text titleItem>Tempo parado</Text>
          <Text itemData>{converterTempoParado(timeStoped)}</Text>
        </View>
        <View item>
          <IoniconsIcon name="pause" size={20} />
          <Text titleItem>Quantidade paradas</Text>
          <Text itemData>{quantStop}</Text>
        </View>
        <View item>
          <IoniconsIcon name="list" size={20} />
          <Text titleItem>Quantidade viagens</Text>
          <Text itemData>{courses}</Text>
        </View>
      </View>

      <View hr />

      <View>
        <View item infos2>
          <IoniconsIcon name="speedometer-outline" size={20} />
          <Text titleItem>Velocidade máxima</Text>
          <Text itemData>{converterTempoParado(timeStoped)} km/h</Text>
        </View>
        <View item infos2>
          <IoniconsIcon name="speedometer" size={20} />
          <Text titleItem>Velocidade média</Text>
          <Text itemData>{quantStop} km/h</Text>
        </View>
        <View item infos2>
          <MCIcon name="map-marker-distance" size={20} />
          <Text titleItem>Distancia total percorrida</Text>
          <Text itemData>{courses} km</Text>
        </View>
      </View>

      <View hr />

      <View>
        <View item infos2>
          <IoniconsIcon name="speedometer-outline" size={20} />
          <Text titleItem>Velocidade máxima</Text>
          <Text itemData>{converterTempoParado(timeStoped)} km/h</Text>
        </View>
        <View item infos2>
          <IoniconsIcon name="speedometer" size={20} />
          <Text titleItem>Velocidade média</Text>
          <Text itemData>{quantStop} km/h</Text>
        </View>
        <View item infos2>
          <MCIcon name="map-marker-distance" size={20} />
          <Text titleItem>Distancia total percorrida</Text>
          <Text itemData>{courses} km</Text>
        </View>
      </View>
    </Container>
  );
};

export default MapInfos;
