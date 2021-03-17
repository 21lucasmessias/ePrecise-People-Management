import styled from 'styled-components/native';
import { Button as Butt } from 'react-native-paper';

export const ButtonsView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 20px;
`;

export const Button = styled(Butt).attrs({
  color: '#476A6F',
  mode: "contained"
})`
  width: 45%;
`;
