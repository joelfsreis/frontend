import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import styled from 'styled-components';

const Container = styled.div`
  z-index: 999;
  height: 100vh;
  width: 100vw;
  opacity: 0.7;
  background-color: ${props => props.theme.lightgrey};
`

class Loader extends Component {
  render() {
    return (
      <Container>
        <CircularProgress />
      </Container>
    )
  }
}

export default Loader