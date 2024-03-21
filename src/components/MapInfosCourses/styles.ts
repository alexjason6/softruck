import styled, {css} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type propsElement = {
  plate?: boolean;
  address?: boolean;
  item?: boolean;
  change?: boolean;
  courses?: boolean;
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
`;

export const View = styled.View<propsElement>`
  width: 100%;
  margin-top: 10px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

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

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  margin-left: 50%;
  margin-right: auto;
  border-radius: 25px;
`;

export const EntypoIcon = styled(Entypo)`
  color: ${({theme}) => theme.colors.blues.dark};
`;

export const Text = styled.Text<propsElement>`
  color: ${({theme}) => theme.colors.grays.main};
  text-align: center;

  ${({plate}) =>
    plate &&
    css`
      font-size: 18px;
      font-weight: bold;
      text-align: left;
      margin-top: 10px;
      margin-left: 10px;
    `}

  ${({address, theme}) =>
    address &&
    css`
      font-size: 12px;
      color: ${theme.colors.grays.light};
      margin: 10px;
      text-align: left;
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

  ${({courses, theme}) =>
    courses &&
    css`
      font-weight: bold;
      color: ${theme.colors.white};
    `};
`;
