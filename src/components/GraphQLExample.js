import React, { Component } from 'react'
import styled from 'styled-components'

const QUERY = `query GET_POSTS { \n    posts {\n        id\n        name\n        description\n    }\n}`

const MUTATION = `mutation CREATE_POST($data: InputCreatePost!) { \n    createPost(data: $data) {\n        id\n        name\n        description\n    }\n}`

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
