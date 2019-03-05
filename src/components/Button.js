import React, { Component } from 'react'
import styled from 'styled-components';
import { Button as ButtonMaterial } from '@material-ui/core';

export const MyButton = styled(ButtonMaterial)`
  && {
    font-size: 3rem;
    margin: 2rem 0;
    margin-right: 2rem;
  }
`

export default class Button extends Component {
  render() {
    return <MyButton variant="outlined" color="secondary" onClick={this.props.onClick}>{this.props.children}</MyButton>
  }
}
