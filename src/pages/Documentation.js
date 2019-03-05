import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Divider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import GraphQLExample from '../components/GraphQLExample'

const Panel = styled(ExpansionPanel)`
  h4 {
    color: ${props => props.theme.accent}
  }

  code {
    background-color: ${props => props.theme.lightBackgroundColor};
  }

  p {
    margin: 1rem 0;
  }

  [class*="ExpansionPanelDetails"] {
    flex-direction: column;
  }
`

export default class Documentation extends Component {
  docs = [
    { name: 'Node.js', body: () => this.nodeDocs() },
    { name: 'Visual Studio Code Editor', body: () => this.codeEditorDocs() },
    { name: 'Chrome', body: () => this.chromeDocs() },
    { name: 'ApolloClient GraphQL', body: () => this.apolloClientDocs() },
    { name: 'ApolloServer GraphQL', body: () => this.apolloServerDocs() },
  ]

  apolloClientDocs = () => {
    return (
      <Fragment>
        <h4>GraphQL Query Example</h4>
        <GraphQLExample />
        <h4>GraphQL Mutation Example</h4>
        <GraphQLExample mutation />
      </Fragment>
    )
  }

  apolloServerDocs = () => {
    return (
      <Fragment>
        <h4>Defining GraphQL API</h4>
        <h4>Resolvers</h4>
      </Fragment>
    )
  }

  chromeDocs = () => {
    return (
      <Fragment>
        <h4>Developer Tools</h4>
        <h4>Extensions</h4>
      </Fragment>
    )
  }

  codeEditorDocs = () => {
    return (
      <Fragment>
        {/* <h4>Terminal</h4> */}
        <h4>Plugins</h4>
        <p><strong>vscode-styled-components</strong> | <i>Julien Poissonnier</i>:</p><p>Syntax highlighting for styled-components</p>
        <p><strong>GraphQL for VSCode</strong> | <i>Kumar Harsh</i>:</p><p>GraphQL syntax highlighting, linting, auto-complete, and more!</p>
        <p><strong>GraphQL</strong> | <i>Prisma</i>:</p><p>GraphQL extension for VSCode adds syntax highlighting, validation, and language features like go to definition, hover information and autocompletion for graphql projects...</p>
        <p><strong>ES7 React/Redux/GraphQL/React-Native snippets</strong> | <i>dsznajder</i>:</p><p>Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax</p>
        <p><strong>DotENV</strong> | <i>mikestead</i>:</p><p>Support for dotenv file syntax</p>
        <p>--</p>
        <p>Visual Studio Code <a href="https://code.visualstudio.com/" rel="noopener noreferrer" target="_blank">website</a></p>
      </Fragment>
    )
  }

  nodeDocs = () => {
    return (
      <Fragment>
        <h4>Version</h4>
        <p>Using the LTS Node version, currently at <b>10.15.3</b></p>
        <p>--</p>
        <p>Node.js <a href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">website</a></p>
      </Fragment>
    )
  }

  render() {
    return (
      <div>
        <h2>Documentation</h2>
          {this.docs.map(doc => (
            // <div key={doc.name}>
            <Panel key={doc.name}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}><strong>{doc.name}</strong></ExpansionPanelSummary>
              <Divider />
              <ExpansionPanelDetails>{doc.body()}</ExpansionPanelDetails>
            </Panel>
            // </div>
          ))}
        {/* <h3>Queries and Mutations</h3>
        <h4>GraphQL Query Example</h4>
        <GraphQLExample />
        <h4>GraphQL Mutation Example</h4>
        <GraphQLExample mutation /> */}
      </div>
    )
  }
}
