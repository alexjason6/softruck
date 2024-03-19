import React from 'react';

import {Container, CloseButton, Icon, Text} from './styles';

interface propsElement {
  placa: string;
}

const MapInfos: React.FC<propsElement> = ({placa}) => {
  return (
    <Container>
      <CloseButton>
        <Icon name="chevron-up" size={20} />
      </CloseButton>
      <Text plate>{placa}</Text>
    </Container>
  );
};

export default MapInfos;
