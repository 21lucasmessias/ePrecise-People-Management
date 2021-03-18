import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  height: 90%;
`

export const MainInfo = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 30px;
`;

export const NameAgeView = styled.View`
  flex-direction: column;
`;

export const InfoWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
  flex-direction: row;
  align-content: flex-start;
  
`;

export const TextContainer = styled.View`
  padding-right: 12px;
  padding-top: 8px;
  margin-bottom: 16px;

  width: 50%; 
  align-items: flex-start;
`;

export const Text = styled.Text`
  font-family: 'RobotoMono_400Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;

  letter-spacing: 1.25px;

  color: #000000;
`;

export const TextInfo = styled.Text`
  font-family: 'RobotoMono_400Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;

  letter-spacing: 1.25px;

  color: #519E8A;
`;
