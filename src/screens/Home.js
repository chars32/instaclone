import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import client_id from '../env'

const Container = styled.View`
  flex: 1;
  padding-top: ${(props) => props.paddingTop}px;
`

const Home = () => {
  // `https://api.unsplash.com/photos/?client_id=${client_id}`

  const [data, setData] = useState([])

  useEffect(() => {

  },[])


  const insets = useSafeAreaInsets();
  return (
    <Container paddingTop={insets.top}>
      <Text>Home</Text>
    </Container>
  )
}

export default Home
