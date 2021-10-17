import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import { AuxBoldText, AuxRow } from '../commons/components/AuxStyles';

const SIZES = Dimensions.get('screen')

const Container = styled.View``
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 11px 10px;
  align-items: center;
`
const AuthorAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: ${32/2}px;
  margin-right: 10px;
`
const HeaderInfo = styled.View``
const AuthorName = styled.Text`
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 1px;
`
const PostLocation = styled.Text`
font-size: 11px;
line-height: 13px;
letter-spacing: 0.07px;
`

const PostImage = styled.Image`
width: ${SIZES.width}px;
height: 375px;
`

const PostActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 8px 0;
  `

const Actions = styled.TouchableOpacity`
  margin-right: ${({hasMargin}) => hasMargin ? '17px' : 0};
  `

const HorizontalMargin = styled.View`
  padding-left: 14px;
  padding-right: 14px;
  `

const Likes = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`
const LikeImage = styled.Image`
  width: 17px;
  height: 17px;
  border-radius: ${17 / 2}px;
  margin-right: 5.5px;
`
const LikeText = styled.Text`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.07px;
`

const Description = styled.Text`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;
  margin-bottom: 8px;
`

const Age = styled.Text`
  font-size: 11px;
  line-height: 13px;
  letter-spacing: -0.05px;
  color: rgba(0, 0, 0, 0.4);
`

const Post = ({autorName, imageUrl, imageUser, postLocation}) => {

  const [liked, setLiked] = useState(false)
  const [bookmark, setBookmark] = useState(false)

  return (
    <Container>
      <Header>
        <AuxRow style={{}}>          
          <AuthorAvatar 
            source={
              {uri: imageUser}
              }
            />
          <HeaderInfo>
            <AuthorName>{autorName}</AuthorName>
            <PostLocation>{postLocation ? postLocation : `Not Available`}</PostLocation>
          </HeaderInfo>
        </AuxRow>
        <TouchableOpacity
          onPress={() => {
            console.log("Me presionaste")
          }}
          >
          <Entypo name="dots-three-horizontal" size={24} color="black" />
      </TouchableOpacity>
      </Header>

      <PostImage
        source = {
          {uri: imageUrl}
        } 
      />
      <HorizontalMargin>
        <PostActions>
          <AuxRow>
            <Actions hasMargin onPress={() => setLiked(!liked)}>
              <Ionicons 
                name={`ios-heart-${liked ? 'sharp' : 'outline'}`} 
                size={26} 
                color={liked ? 'red': 'black'} />
            </Actions>
            <Actions hasMargin>
              <FontAwesome name="comment-o" size={24} color="black" />
            </Actions>
            <Actions>
              <Ionicons name="paper-plane-outline" size={24} color="black" />
            </Actions>
          </AuxRow>

          <Actions onPress={() => setBookmark(!bookmark)}>
            <FontAwesome 
              name={bookmark ? 'bookmark' : 'bookmark-o'}
              size={24} 
              color="black" />
          </Actions>
        </PostActions>

        <Likes>
          <LikeImage
            source={
              {uri: imageUser}
            }
          />
          <LikeText>
            Liked by <AuxBoldText>craig_love</AuxBoldText> and {''}
            <AuxBoldText>44,686 others</AuxBoldText>
          </LikeText>
        </Likes>

        <Description numberOfLines={3}>
          <AuthorName>{autorName}</AuthorName>It is a long established fact that a reader will be 
          distracted by the readable content of a page when 
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
          of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </Description>

        <Age>2 hrs ago</Age>
      </HorizontalMargin>
    </Container>
  )
}

export default Post
