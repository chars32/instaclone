import React, { useRef } from 'react'
import { Dimensions, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import useSWR from 'swr'
import { fetcher } from '../commons/utils'
import { Header, Post } from '../components'
import client_id from '../env'
import LottieView from 'lottie-react-native';

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

  const animation = useRef(null)

  const {top} = useSafeAreaInsets()

  const fetchMore = () => {

  }

  return (
    <Container paddingTop={top}>
      {data ? 
        <FlatList
        contentContainerStyle={{
          width: Dimensions.get('screen').width,
        }}
        ListHeaderComponent={<Header />}
        data={data}
        renderItem={({item}) => {
          return <Post 
            autorName = {item.user.username} 
            imageUrl={item.urls.regular}
            imageUser={item.user.profile_image.small}
            postLocation={item.user.location}
          />
        }}
        >
        </FlatList> 
        : 
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#eee',
          }}
          source={require('../../assets/loader.json')}
        />
      }
      
    </Container>
  )
}

export default Home
