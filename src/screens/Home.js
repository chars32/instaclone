import React, { useRef, useState } from 'react'
import { Dimensions, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import useSWRInfinite from 'swr/infinite'
import { fetcher } from '../commons/utils'
import { Header, Post, StoriesSlider } from '../components'
import client_id from '../env'
import LottieView from 'lottie-react-native';

const Container = styled.View`
  flex: 1;
  padding-top: ${(props) => props.paddingTop}px;
`

const getKey = (pageIndex, previousPageData) => {
  if(previousPageData && !previousPageData.length) return null;
  return `https://api.unsplash.com/photos/?page=${pageIndex}&client_id=${client_id}`
}


const Home = () => {

  const [page, setPage] = useState(10)

  const { data, size, setSize } = useSWRInfinite(getKey, fetcher, {
    initialData: [],
    revalidateOnMount: true,
  })


  const animation = useRef(null)

  const {top} = useSafeAreaInsets()

  const fetchMore = () => {
    setSize(size + 1)
  }


  return (
    <Container paddingTop={top}>
      {data ? 
        <FlatList
          contentContainerStyle={{
            width: Dimensions.get('screen').width,
          }}
          ListHeaderComponent={<>
            <Header />
            <StoriesSlider />
          </>}
          data={data}
          keyExtractor={(item, index) => `Post__${item.id}__${index}`}
          renderItem={({item}) => {
            return React.Children.toArray(item.map((image) => 
              <Post 
                autorName = {image.user.username} 
                imageUrl={image.urls.regular}
                imageUser={image.user.profile_image.small}
                postLocation={image.user.location}
              />
            ))
          }}
          onEndReached={fetchMore}
          onEndReachedThreshold={0.9}
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
