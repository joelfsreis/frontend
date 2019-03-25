import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import GraphQLExample from './GraphQLExample'

export const ErrorHeader = styled.h3`
  color: ${props => props.theme.red};
  justify-content: center;
  display: flex;
  flex: 1;
`

const ErrorContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  code {
    margin: auto;
  }
`

export default class Error extends Component {
  networkErrorRender = ({ networkError }) => {
    const errorMessage = (networkError.result || { errors: [] }).errors.reduce((acc, error) => {
      return !!acc ? `${acc}\n\n${error.message}` : `${error.message}`
    }, '')
    return !!errorMessage ? <GraphQLExample code={errorMessage} /> : null
  }

  graphqlErrorRender = ({ graphQLErrors }) => {
    return (
      <Fragment>
        {
          (graphQLErrors || []).map(error => {
            const msg = `RequestID: ${error.requestId} with path: ${error.path}\n\n${error.message}`
            return <GraphQLExample key={error.requestId} code={msg} />
          })
        }
      </Fragment>
    )
  }

  render() {
    const { error } = this.props
    return (
      <ErrorContainer>
        { error && error.message && <ErrorHeader>{error.message}</ErrorHeader> }
        {
          error && error.networkError
          ?
            this.networkErrorRender(error)
          :
            error && error.graphQLErrors
            ?
              this.graphqlErrorRender(error)
            :
              this.props.children || <ErrorHeader>Something bad happen!</ErrorHeader>
        }
      </ErrorContainer>
    )
  }
}
