import React from 'react'
import { Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import useSWR from 'swr'
import { fetcher } from '../commons/utils'
import client_id from '../env'

const Container = styled.View`
  flex: 1;
  padding-top: ${(props) => props.paddingTop}px;
`
const URL = `https://api.unsplash.com/photos/?client_id=${client_id}`

const Home = () => {

  const { data, error } = useSWR(URL, fetcher, {
    initialData: [],
    revalidateOnMount: true
  })

  const insets = useSafeAreaInsets();
  return (
    <Container paddingTop={insets.top}>
      <Text>Home</Text>
      {React.Children.toArray(        
          data.map((item) => {
            return <Text>{item.id}</Text>
        })
      )}
    </Container>
  )
}

export default Home
