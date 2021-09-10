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
  const URL = `https://api.unsplash.com/photos/?client_id=${client_id}`
  
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        response.json()
          .then(
            (json) => {
              console.log(json)
            }
          )
      })
      .catch((error) => {
        console.log('Ocurrio un error', error)
      }) 
  },[])


  const insets = useSafeAreaInsets();
  return (
    <Container paddingTop={insets.top}>
      <Text>Home</Text>
      {data.map((item) => {
        return <Text>{item.id}</Text>
      })}
    </Container>
  )
}

export default Home
