import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import GraphQLExample from './GraphQLExample'

const ErrorHeader = styled.h3`
  color: ${props => props.theme.red};
`

export default class Error extends Component {
  networkErrorRender = ({ networkError }) => {
    const errorMessage = networkError.result.errors.reduce((acc, error) => {
      return !!acc ? `${acc}\n\n${error.message}` : `${error.message}`
    }, '')
    return <GraphQLExample code={errorMessage} />
  }

  render() {
    const { error } = this.props
    return (
      <Fragment>
        <ErrorHeader>{error.message}</ErrorHeader>
        { error.networkError ? this.networkErrorRender(error) : null }
      </Fragment>
    )
  }
}
