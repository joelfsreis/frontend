import React, { Component, Fragment } from 'react'
import Button from './Button'

export default class Tutorial extends Component {
  state = {
    stage: 1,
    stageMessage: '',
  }

  componentWillMount() {
    const tutorialStage = localStorage.getItem('tutorialStage')
    this.setState({ stage: (tutorialStage && Number(tutorialStage)) || 1 })
  }

  handleOnClick = (e) => {
    e.preventDefault()
  }

  handleStageOneClick = (e) => {
    e.preventDefault()
    this.setState({ stage: 2, stateMessage: '' })
    localStorage.setItem('tutorialStage', 2)
  }

  handleStageTwoClick = (e) => {
    e.preventDefault()
    this.setState({ stage: 3, stateMessage: '' })
    localStorage.setItem('tutorialStage', 3)
  }

  handleStageTwoBackClick = (e) => {
    e.preventDefault()
    this.setState({ stage: 1, stateMessage: '' })
    localStorage.setItem('tutorialStage', 1)
  }

  handleStageThreeBackClick = (e) => {
    this.handleStageOneClick(e)
  }

  handleStageThreeClick = async (e) => {
    e.preventDefault()
    try {
      await fetch('http://localhost:4000');
      this.setState({ stage: 4, stateMessage: '' })
      localStorage.setItem('tutorialStage', 4)
    } catch {
      const { stateMessage } = this.state
      const error = !stateMessage ? 'Your backend server is down' : stateMessage + '.'
      this.setState({ stateMessage: error })
    }
  }

  handleStageFourClick = (e) => {
    e.preventDefault()
    localStorage.setItem('tutorialComplete', true);
    localStorage.setItem('tutorialStage', 1);
    this.props.endTutorial();
  }

  stageOne = () => {
    return (
      <Fragment>
        <h3>For start, what you need to know</h3>
        <strong>File structure</strong>
        <p>Important files that you need to know from the backend:</p>
        <p>- <code>prisma.yml</code> have the deploy configs for the Prisma API</p>
        <p>- <code>datamodel.prisma</code> Prisma database schema. Updating this file and run <code>prisma deploy</code> will deploy the schema changes to the database</p>
        <p>- <code>src/schema.graphql</code> you define the available API fields for GraphQL queries and mutations</p>
        <p>- <code>src/resolvers/Query.js</code> will have the resolvers for the GraphQL API Querys</p>
        <p>- <code>src/resolvers/Mutations.js</code> will have the resolvers for the GraphQL API Mutations</p>
        <p>- <code>src/generated/prisma-schema.js</code> have all the Querys, Mutations and Types for the Prisma GraphQL API</p>
        <br />
        <p>Important files that you need to know from the frontend:</p>
        <p>- <code>src/components</code> react components folder</p>
        <p>- <code>src/pages</code> react pages folder, each route has its own page</p>
        <p>- <code>src/lib</code> folder with shared code for the app</p>
        <p>- <code>src/App.js</code> App initialization with <code>ApolloClient</code>, <code>styled-components</code> theme and routes are configured</p>
        <p>- <code>src/apolloClient.js</code> file with database configuration for ApolloClient</p>
        <p>- <code>src/theme.js</code> colors and other related theme configurations</p>
        <Button onClick={this.handleStageOneClick}>CONTINUE</Button>
      </Fragment>
    )
  }

  stageTwo = () => {
    return (
      <Fragment>
        <h3>Let's create a Prisma database and run the backend server</h3>
        <strong>You need to create a free account on <a href="https://app.prisma.io/signup" target="_blank" rel="noopener noreferrer">Prisma website</a></strong>
        <p>- After signup click the <b>GET STARTED</b> button and you will find some information about Prisma</p>
        <p>- Click on Prisma logo, top left, and then go to Settings and save the <b>slug</b> variable value, you will need this later!</p>
        <p>- Make sure you have the npm package `prisma` installed globally and run <code>prisma deploy</code> in the backend directory root</p>
        <p>- Choose the demo server option, the rest is up to you</p>
        <p>- Run <code>npm run deploy</code>, this command is basically will run <code>prisma deploy</code> but using your <code>variables.env</code> file</p>
        <p>- You will authenticate to your Prisma account by just clicking a button in your browser!</p>
        <p>- If everything went well, you should have deployed a Prima database. Also you will have a new folder <code>src/generated</code> containing all the Prisma related code. Never change this files!</p>
        <p>- Now, run <code>npm install</code> and then <code>npm start</code> and you should have a Yoga Server running connected to your Prisma database</p>
        <Button onClick={this.handleStageTwoBackClick}>BACK</Button>
        <Button onClick={this.handleStageTwoClick}>CONTINUE</Button>
      </Fragment>
    )
  }

  stageThree = () => {
    const { stateMessage } = this.state
    return (
      <Fragment>
        <h3>Let's check your backend connectivity</h3>
        { !!stateMessage &&
          (<Fragment>
            <strong>{stateMessage}</strong>
            <p>- See if the server is running or check for errors in the terminal</p>
            <p>- Make sure if your Prisma database was deployed succefully, you should have a <code>src/generated</code> folder.
              You can try to deploy the database and check for errors running <code>npm run deploy</code></p>
            <p>- Run <code>npm start</code></p>
            <p>- Check again!</p>
          </Fragment>)
        }
        <Button onClick={this.handleStageThreeBackClick}>BACK</Button>
        <Button onClick={this.handleStageThreeClick}>CHECK</Button>
      </Fragment>
    )
  }

  stageFour = () => {
    return (
      <Fragment>
        <h3>Congratulations, you have connected your backend app to your Prisma Server</h3>
        <strong>Let's start developing...</strong>
        <p>- For the backend you will need to define the Yoga Server API and implement the resolvers</p>
        <p>- For the frontend you will need to implement the Querys and Mutations to communicate with the backend</p>
        <Button onClick={this.handleStageFourClick}>CONTINUE</Button>
      </Fragment>
    )
  }

  renderStage() {
    const { stage } = this.state
    switch (stage) {
      case 1:
        return this.stageOne()
      case 2:
        return this.stageTwo()
      case 3:
        return this.stageThree()
      case 4:
        return this.stageFour()
      default:
        return this.stageOne()
    }
  }

  render() {
    return this.renderStage()
  }
}
