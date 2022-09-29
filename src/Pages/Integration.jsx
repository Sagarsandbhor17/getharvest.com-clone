import React from 'react'
import styled from 'styled-components'
import BrowseOption from '../components/integration/BrowseOption'
import SearchInt from '../components/integration/SearchInt'
import TodayTime from '../components/integration/TodayTime'
import TopIntegration from '../components/integration/TopIntegration'


const Container = styled.div`
  background-color: #fff8f1;
`
const Integration = () => {
  return (
    <Container>
      <TopIntegration />
      <SearchInt />
      <BrowseOption />
      <TodayTime />
    </Container>
  )
}

export default Integration