import React, { Component } from 'react'
import styled from 'styled-components';
import { Button as ButtonMaterial } from '@material-ui/core';

export const MyButton = styled(ButtonMaterial)`
  && {
    font-size: 1.5rem;
    margin: 1rem 0;
    margin-right: 1rem;
  }
`

export default class Button extends Component {
  render() {
    const { onClick, disabled, children } = this.props
    return <MyButton disabled={disabled} variant="outlined" color="secondary" onClick={onClick}>{children}</MyButton>
  }
}
