import React from 'react';

import {Container, Text} from './styles';

interface PropsElement {
  data: {
    vehicle: {
      plate: string;
    };
  };
}

const MapInfos: React.FC<PropsElement> = ({data}) => {
  return (
    <Container>
      <Text plate>{data.vehicle.plate}</Text>
    </Container>
  );
};

export default MapInfos;
