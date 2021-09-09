import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  padding-top: ${(props) => props.paddingTop}px;
`

const Search = () => {
  const insets = useSafeAreaInsets()
  return (
    <Container paddingTop={insets.top}>
      <Text>Search</Text>
    </Container>
  )
}

export default Search
