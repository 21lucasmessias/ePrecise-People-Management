import React, { useContext, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { AlterContext } from '../../../contexts/AlterContext';
import DatePicker from '../../DatePicker/DatePicker';

import { Container, NameAgeView, TextInput } from './MainInfo.styles';

const MainInfo: React.FC = () => {
  const {
    CPF,
    nameFirst,
    setNameFirst,
    nameFirstError,
    nameLast,
    setNameLast,
    nameLastError,
    birthdayError,
    showBirthday,
    setShowBirthday,
    date,
    setDate
  } = useContext(AlterContext);

  return (
    <Container>
      <SharedElement id={`photo${CPF}`}>
        <Image source={{ uri: 'https://github.com/21lucasmessias.png' }} style={{ width: 170, height: 170, borderRadius: 100 }} />
      </SharedElement>

      <NameAgeView>
        <>
          <TextInput
            label="First Name"
            value={nameFirst}
            keyboardType='default'
            onChangeText={text => setNameFirst(text)}
            error={nameFirstError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />

          <TextInput
            label="Last Name"
            value={nameLast}
            keyboardType='default'
            onChangeText={text => setNameLast(text)}
            error={nameLastError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />
        </>
        <DatePicker dateError={birthdayError} date={date} setDate={setDate} showDate={showBirthday} setShowDate={setShowBirthday} />
      </NameAgeView>
    </Container>
  );
}

export default MainInfo;