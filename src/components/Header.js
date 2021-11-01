import React from 'react'
import styled from 'styled-components/native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { AuxRow } from '../commons/components/AuxStyles';

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px;
`

const Actions = styled.TouchableOpacity`
  margin-right: ${({hasMargin}) => hasMargin ? '17px' : 0};
`

const Logo = styled.Image`
`

const Header = () => {
  return <Container>
    <Actions>
      <Ionicons name="camera-outline" size={24} color="black" />
    </Actions>
    <Logo source={require('../../assets/images/Logo.png')} />
    <AuxRow>
      <Actions hasMargin>
        <MaterialIcons name="live-tv" size={24} color="black" />
      </Actions>
      <Actions>
        <Ionicons name="paper-plane-outline" size={24} color="black" />
      </Actions>
    </AuxRow>
  </Container>
}

export default Header
