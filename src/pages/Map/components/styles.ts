import styled from 'styled-components/native';

type elementProps = {
  position: number;
};

export const View = styled.View`
  width: 40px;
  height: 40px;
  overflow: hidden;
`;

export const Image = styled.Image<elementProps>`
  width: 350px;
  height: 350px;
  /*   position: absolute;
  left: ${({position}) => position}; */
`;
