import styled, {css} from 'styled-components/native';
import IconFi from 'react-native-vector-icons/Feather';

type propsElement = {
  plate: boolean;
};

export const Container = styled.View`
  width: 100%;
  height: 150px;
  background: #ffffff;
  align-self: center;
  position: absolute;
  bottom: 0px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 100%;
  height: 20px;
  background: ${({theme}) => theme.colors.blues.main};
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(IconFi)`
  color: #ffffff;
`;

export const Text = styled.Text<propsElement>`
  color: #444444;

  ${({plate}) =>
    plate &&
    css`
      font-size: 16px;
      text-align: center;
      font-weight: bold;
    `}
`;
