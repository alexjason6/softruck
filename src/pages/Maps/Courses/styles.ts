import styled from 'styled-components/native';
import FiIcon from 'react-native-vector-icons/Feather';

export const SafeAreView = styled.SafeAreaView`
  width: 100%;
  background: ${({theme}) => theme.colors.oranges.main};
`;

export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ChangeCourse = styled.View`
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  position: absolute;
  top: 40%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Item = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: ${({theme}) => theme.colors.white};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(FiIcon)`
  color: ${({theme}) => theme.colors.blues.main};
`;
