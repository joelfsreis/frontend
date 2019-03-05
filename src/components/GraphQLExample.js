import React, { Component } from 'react'
import styled from 'styled-components'

const QUERY = `query EXAMPLE_QUERY { \n    id\n    name\n    description\n}`

const MUTATION = ``

const Example = styled.code`
  display: inline-flex;
`

export default class GraphQLExample extends Component {
  render() {
    const { code, mutation } = this.props
    const example = !!code ? code : !!mutation ? MUTATION : QUERY
    return <Example>{example}</Example>
  }
}
