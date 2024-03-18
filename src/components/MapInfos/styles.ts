import styled, {css} from 'styled-components/native';

type propsElement = {
  plate: boolean;
};

export const Container = styled.View`
  width: 100%;
  height: 150px;
  background: #ffffff;
  align-self: center;
  padding: 20px;
  position: absolute;
  bottom: 0px;
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
