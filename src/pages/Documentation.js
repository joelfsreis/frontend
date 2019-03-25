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
    margin: 0.5rem 0;
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
    { name: 'React', body: () => this.reactDocs() },
    { name: 'GraphQL', body: () => this.grahpqlDocs() },
    { name: 'Prisma', body: () => this.prismaDocs() },
    { name: 'Apollo Client', body: () => this.apolloClientDocs() },
    { name: 'Yoga GraphQL Server', body: () => this.yogaServerDocs() },
  ]

  apolloClientDocs = () => {
    return (
      <Fragment>
        <h4>GraphQL Query Example</h4>
        <GraphQLExample />
        <h4>GraphQL Mutation Example</h4>
        <GraphQLExample mutation />
        <p>--</p>
        <p>Apollo Documentation <a href="https://www.apollographql.com/docs/" rel="noopener noreferrer" target="_blank">website</a></p>
      </Fragment>
    )
  }

  yogaServerDocs = () => {
    const api = `type Post { \n    id: ID!\n    name: String!\n    description: String!\n}\n\ninput InputCreatePost {\n    name: String!\n    description: String!\n}\n\ntype Query {\n    posts: [Post]!\n}\n\ntype Mutations {\n    createPost(data: InputCreatePost!): Post!\n}`
    const query = `// Query.js \npost(root, args, ctx) {\n    // redirect to Prisma query...\n    return ctx.prima.post();\n}`
    const mutation = `// Mutations.js \ncreatePost(root, args, ctx) {\n    // redirect to Prisma mutation using \`args\` as data sent from frontend\n    return ctx.prisma.createPost({ ...args });\n}`
    return (
      <Fragment>
        <h4>Defining GraphQL API</h4>
        <code>{api}</code>
        <h4>Resolvers</h4>
        <code>{query}</code>
        <br />
        <code>{mutation}</code>
        <h4>Playground</h4>
        <p>If you have your Yoga backend server running, you can access Yoga GraphQL Playground <a href="http://localhost:4000/playground" rel="noopener noreferrer" target="_blank">here</a></p>
        <p>--</p>
        <p>Yoga GraphQL GitHub <a href="https://github.com/prisma/graphql-yoga" rel="noopener noreferrer" target="_blank">website</a></p>
      </Fragment>
    )
  }

  chromeDocs = () => {
    return (
      <Fragment>
        <h4>Developer Tools</h4>
        <p><strong>Elements</strong></p><p>DOM and CSS for the document webpage</p>
        <p><strong>Console</strong></p><p>JavaScript terminal, <strong>you can do a lot with this!</strong></p>
        <p><strong>Sources</strong></p><p>JavaScript files being executed where you can debug your code</p>
        <p><strong>Network</strong></p><p>All the connections your browser do to load this website</p>
        <p><strong>Application</strong></p><p>You can check the cookies, localStorage and several other informations from the website</p>
        <h4>Extensions</h4>
        <p><strong>React Developer Tools</strong></p>
        <p><strong>Apollo Client Developer Tools</strong></p>
        <p>--</p>
        <p>Chrome Extensions <a href="https://chrome.google.com/webstore/category/extensions" rel="noopener noreferrer" target="_blank">website</a></p>
      </Fragment>
    )
  }

  codeEditorDocs = () => {
    return (
      <Fragment>
        <h4>Plugins</h4>
        <p><strong>vscode-styled-components</strong> | <i>Julien Poissonnier</i></p><p>Syntax highlighting for styled-components</p>
        <p><strong>GraphQL for VSCode</strong> | <i>Kumar Harsh</i></p><p>GraphQL syntax highlighting, linting, auto-complete, and more!</p>
        <p><strong>GraphQL</strong> | <i>Prisma</i></p><p>GraphQL extension for VSCode adds syntax highlighting, validation, and language features like go to definition, hover information and autocompletion for graphql projects...</p>
        <p><strong>ES7 React/Redux/GraphQL/React-Native snippets</strong> | <i>dsznajder</i></p><p>Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax</p>
        <p><strong>DotENV</strong> | <i>mikestead</i></p><p>Support for dotenv file syntax</p>
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

  reactDocs = () => {
    return (
      <Fragment>
        <h4>Version</h4>
        <p>We are using at least React version 16.8.4 but don't worry, npm will manage that for you!</p>
        <p>--</p>
        <p>React Documentation <a href="https://reactjs.org/docs/getting-started.html" rel="noopener noreferrer" target="_blank">website</a></p>
      </Fragment>
    )
  }

  grahpqlDocs = () => {
    return (
      <Fragment>
        <h4>Tutorial</h4>
        <p>Great GraphQL tutorial <a href="https://www.howtographql.com/" rel="noopener noreferrer" target="_blank">website</a></p>
        <p>--</p>
        <p>GraphQL Documentation <a href="https://graphql.org/learn/" rel="noopener noreferrer" target="_blank">website</a></p>
      </Fragment>
    )
  }

  prismaDocs = () => {
    return (
      <Fragment>
        <h4>Playground</h4>
        <p>You can access your Prisma GraphQL Playground by just pasting the endpoint URI of your Prisma Endpoint in your browser</p>
        <p>If you have already setup your Yoga backend server, just go to your `backend` folder and check your <code>variables.env/PRISMA_ENDPOINT</code> variable</p>
        <h4>Console</h4>
        <p>Your dashboard for your Prisma services. You can manage all of your instances <a href="https://app.prisma.io" rel="noopener noreferrer" target="_blank">here</a></p>
        <p>--</p>
        <p>Prisma Documentation <a href="https://prisma.io/docs" rel="noopener noreferrer" target="_blank">website</a></p>
      </Fragment>
    )
  }

  render() {
    return (
      <div>
        <h2>Documentation</h2>
          {this.docs.map(doc => (
            <Panel key={doc.name}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}><strong>{doc.name}</strong></ExpansionPanelSummary>
              <Divider />
              <ExpansionPanelDetails>{doc.body()}</ExpansionPanelDetails>
            </Panel>
          ))}
      </div>
    )
  }
}
