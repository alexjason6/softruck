import styled, {css} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type propsElement = {
  plate?: boolean;
  address?: boolean;
  item?: boolean;
  titleItem?: boolean;
  itemData?: boolean;
  sizeInfo?: boolean;
  hr?: boolean;
  halfHr?: boolean;
  infos2?: boolean;
  infos3?: boolean;
  car?: boolean;
};

export const Container = styled.View<propsElement>`
  width: 100%;
  height: 210px;
  background: ${({theme}) => theme.colors.white};
  align-self: center;
  position: absolute;
  bottom: 0px;

  ${({sizeInfo}) =>
    sizeInfo &&
    css`
      height: 65%;
    `};
`;

export const View = styled.View<propsElement>`
  width: 100%;
  margin-top: 10px;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;

  ${({car}) =>
    car &&
    css`
      margin: 0;
      align-items: center;
      justify-content: flex-start;
    `};

  ${({item, infos2, infos3, theme}) =>
    item &&
    css`
      width: 30%;
      border-top-width: 0px;
      border-left-width: 0px;
      border-right-width: 0px;
      border-bottom-width: 4px;
      border-style: solid;
      border-color: ${infos2
        ? theme.colors.blues.light
        : infos3
        ? theme.colors.greens.light
        : theme.colors.oranges.light};
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `};

  ${({hr, halfHr, theme}) =>
    hr &&
    css`
      width: 90%;
      margin: ${halfHr ? 15 : 30}px auto;
      border-top-width: 1px;
      border-top-color: ${theme.colors.grays.lighter};
      border-top-style: solid;
    `};
`;

export const CloseButton = styled.TouchableOpacity`
  width: 100%;
  height: 25px;
  background: ${({theme}) => theme.colors.blues.main};
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  margin-left: 50%;
  margin-right: auto;
  border-radius: 25px;
`;

export const FiIcon = styled(Feather)`
  color: ${({theme}) => theme.colors.white};
`;

export const EntypoIcon = styled(Entypo)`
  color: ${({theme}) => theme.colors.blues.dark};
`;

export const IoniconsIcon = styled(Ionicons)`
  color: ${({theme}) => theme.colors.blues.dark};
`;

export const MCIcon = styled(MaterialCommunityIcons)`
  color: ${({theme}) => theme.colors.blues.dark};
`;

export const Text = styled.Text<propsElement>`
  width: 100%;
  color: ${({theme}) => theme.colors.grays.main};
  text-align: center;

  ${({plate}) =>
    plate &&
    css`
      width: 100%;
      font-size: 18px;
      font-weight: bold;
      margin-left: 10px;
    `}

  ${({address, theme}) =>
    address &&
    css`
      font-size: 12px;
      color: ${theme.colors.grays.light};
      margin-top: 5px;
    `};

  ${({titleItem}) =>
    titleItem &&
    css`
      font-size: 12px;
    `};

  ${({itemData, theme}) =>
    itemData &&
    css`
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 5px;
      color: ${theme.colors.oranges.dark};
    `};
`;
