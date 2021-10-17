import React, { useRef } from 'react'
import { ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import useSWR from 'swr'
import { fetcher } from '../commons/utils'
import { Post } from '../components'
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

  const insets = useSafeAreaInsets();
  return (
    <Container paddingTop={insets.top}>
            {data ? 
        <ScrollView>
          {React.Children.toArray(        
              data.map((item) => {
                return <Post
                  autorName = {item.user.username} 
                  imageUrl={item.urls.regular}
                  imageUser={item.user.profile_image.small}
                  postLocation={item.user.location}
                />
            })
          )}
          </ScrollView> 
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
