import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';

const SIZES = Dimensions.get('screen')

const Container = styled.View``
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 11px 10px;
  align-items: center;
`
const AuxRow = styled.View`
  flex-direction: row;
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
const PostLocation = styled.Text``

const PostImage = styled.Image`
width: ${SIZES.width}px;
height: 375px;
`

const PostActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 13.5px 14px 14.5px 14px;
`

const Actions = styled.TouchableOpacity`
  margin-right: ${({hasMargin}) => hasMargin ? '17px' : 0};
`


const Post = ({autorName, imageUrl, imageUser, postLocation}) => {
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

      <PostActions>
        <AuxRow>
          <Actions hasMargin>
            <Ionicons name="ios-heart-outline" size={24} color="black" />
          </Actions>
          <Actions hasMargin>
            <FontAwesome name="comment-o" size={24} color="black" />
          </Actions>
          <Actions>
            <Ionicons name="paper-plane-outline" size={24} color="black" />
          </Actions>
        </AuxRow>

        <Actions>
          <FontAwesome name="bookmark-o" size={24} color="black" />
        </Actions>
      </PostActions>
    </Container>
  )
}

export default Post
