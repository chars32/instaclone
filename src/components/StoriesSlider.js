import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

const DATA_IMG = [
  {
    url: 'https://images.pexels.com/photos/9545106/pexels-photo-9545106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    username: 'cgarcia'
  },
  {
    url: 'https://images.pexels.com/photos/9726123/pexels-photo-9726123.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    username: 'helenag'
  },
  {
    url: 'https://images.pexels.com/photos/9820110/pexels-photo-9820110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    username: 'hegaan'
  },
  {
    url: 'https://images.pexels.com/photos/8957076/pexels-photo-8957076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    username: 'claudia'
  },
  {
    url: 'https://images.pexels.com/photos/4073994/pexels-photo-4073994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    username: 'mell78'
  },
  {
    url: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    username: 'argi90'
  },
  {
    url: 'https://images.pexels.com/photos/9801242/pexels-photo-9801242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    username: 'rzaca80'
  },
  {
    url: 'https://images.pexels.com/photos/6205775/pexels-photo-6205775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    username: 'jolg123'
  },
]
const Container = styled.ScrollView`
  width: 100%;
`

const UserStory = styled.TouchableOpacity`
  margin-right: ${({hasMarginRight}) => (hasMarginRight ? '21px': '10px')};
  margin-left: ${({hasMarginLeft}) => (hasMarginLeft ? '10px' : '0')};
  align-items: center;
`

const CircleContainer = styled(LinearGradient)`
  margin-bottom: 5px;
  width: 62px;
  height: 62px;
  border-radius: ${62/2}px;
  align-items: center;
  justify-content: center;
`

const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: ${56/2}px;
`

const UserName = styled.Text`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.01px;
  color: #262626;
`

const StoriesSlider = () => {
  return <Container horizontal showsHorizontalScrollIndicator={false}>
    {
      React.Children.toArray(DATA_IMG.map((user, index) => 
      <UserStory hasMarginRight={index === DATA_IMG.length - 1 ? false : true} hasMarginLeft={index === 0 ? true : false}>
        <CircleContainer
           colors={['#FBAA47', '#D91A46', '#192f6a']}
        >
          <Avatar 
            style={{borderWidth: 1, borderColor: 'white'}} 
            source={{uri: user.url}} 
          />
        </CircleContainer>
        <UserName>{user.username}</UserName>
      </UserStory>))
    }

  </Container>
  
}

export default StoriesSlider
