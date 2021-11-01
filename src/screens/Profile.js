import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { StoriesSlider } from '../components/'

import { Ionicons, Entypo } from '@expo/vector-icons'

const Container = styled.View`
  flex: 1;
  padding-top: ${(props) => props.paddingTop}px;
`

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding-top: 26px;
  align-items: center;
  margin-bottom: 11px;
`

const UserName = styled.Text`
  margin: 0 5px;
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  letter-spacing: -0.33px;
  color: #262626;
`

const MenuIcon = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  top: 26px;
`

const HeroContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
  margin-right: 28px;
`
const AvatarContainer = styled.View`
  width: 96px;
  height: 96px;
  border-radius: ${96 / 2}px;
  justify-content: center;
  align-items: center;
`
const Avatar = styled.Image`
  width: 86px;
  height: 86px;
  border-radius: ${86 / 2}px;
`
const StatContainer = styled.View`
  align-items: center;
`

const StatCount = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: #262626;
`

const StatName = styled.Text`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.1px;
  color: #262626;
`

const UserInfo = styled.View`
margin: 0 16px;
`
const FullName = styled.Text`
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
`
const Description = styled.Text`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 17px;
  color: #262626;
`

const Link = styled.Text`
  font-size: 12px;
  line-height: 17px;
  color: #3d66ee;
  margin-bottom: 15px;
`

const EditProfileButton = styled.TouchableOpacity`
  background-color: #ffffff;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 6px 0;
  margin-bottom: 15px;
`
const EditProfileText = styled.Text`
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #262626;
  
`


const DATA = [
  {
    url: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?cs=srgb&dl=pexels-belle-co-1000445.jpg&fm=jpg0',
    username: 'Friends'
  },
  {
    url: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg',
    username: 'Sports'
  },
  {
    url: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    username: 'Travel'
  },
]


const Profile = () => {
  const { top } = useSafeAreaInsets()
  return (
    <Container paddingTop={top}>
      <Header>
        <Entypo name="lock" size={14} color="black" />
        <UserName>cgarcia</UserName>
        <TouchableOpacity>
          <Ionicons name="chevron-down" size={16} color='black' />
        </TouchableOpacity>
        <MenuIcon>
          <Ionicons name="menu-outline" size={24} color='black' />
        </MenuIcon>
      </Header>

      <HeroContainer>
        <AvatarContainer
          style={{
            borderWidth: 1.5,
            borderColor: '#C7C7C7',
          }}
        >
          <Avatar
            source={{ uri: 'https://animeshelter.com/wp-content/uploads/2020/12/jujutsu-kaisen-episode-9-1431.jpg ' }}
          />
        </AvatarContainer>

        <StatContainer>
          <StatCount>
            54
          </StatCount>
          <StatName>
            Posts
          </StatName>
        </StatContainer>
        <StatContainer>
          <StatCount>
            1600
          </StatCount>
          <StatName>
            Follower
          </StatName>
        </StatContainer>
        <StatContainer>
          <StatCount>
            800
          </StatCount>
          <StatName>
            Following
          </StatName>
        </StatContainer>
      </HeroContainer>

      <UserInfo>
        <FullName>
          Carlos Garcia
        </FullName>

        <Description numberOfLines={3}>
          Digital goodies desinger and developer
        </Description>

        <TouchableOpacity>
          <Link>carlosgarcia.dev</Link>
        </TouchableOpacity>
        <EditProfileButton
          style={{
            borderWidth: 1,
            borderColor: 'rgba(60, 60, 67, 0.18)',
          }}
        >
          <EditProfileText>Edit Profile</EditProfileText>
        </EditProfileButton>
        <StoriesSlider data={DATA} areHighlightStories />
      </UserInfo>
    </Container>
  )
}

export default Profile
