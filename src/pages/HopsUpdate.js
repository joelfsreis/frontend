import React, { Component, Fragment } from 'react'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Query, Mutation } from 'react-apollo';
import { HOPS_QUERY } from './Hops';
import Error from '../components/Error'
import Loader from '../components/Loader';

import Button from '../components/Button'
import gql from 'graphql-tag';

const Section = styled.section`
  form {
    display: flex;
    flex-direction: column;
  }
`

const GET_HOP = gql`
  query GET_HOP_MUTATION ($where: HopWhereUniqueInput!){
    hops(where: $where) {
      id
      name
      alphaAcids
      description
    }
  }
`

const UPDATE_HOP = gql`
  mutation UPDATE_HOP_MUTATION ($where: HopWhereUniqueInput!, $data: UpdateHopsInput!){
    updateHops(where: $where, data: $data) {
      id
      name
      alphaAcids
      description
    }
  }
`

class HopsUpdate extends Component {
  constructor(props) {
    super()

    this.state = {
      id: props.match.params.id,
      name: undefined,
      alphaAcids: undefined,
      description: undefined,
    }
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.id]: e.target.type === 'number' ? Number(e.target.value) : e.target.value })
  }

  onBlur = (e) => {
    e.preventDefault()
    if (this.state[e.target.id] === undefined) {
      this.setState({ [e.target.id]: '' })
    }
  }

  hasError = (value) => value !== undefined && !value

  formIsValid = () => {
    const { name, alphaAcids, description } = this.state
    return  !!name || !!alphaAcids || !!description
  }

  renderContent = (hop, onClick) => {
    const { id, name, alphaAcids, description } = hop;
    return (
      <Section>
        <form>
          <TextField
            id="id"
            label="ID"
            margin="normal"
            variant="outlined"
            defaultValue={id}
            disabled
          />
          <TextField
            required
            id="name"
            label="Hop name"
            margin="normal"
            variant="outlined"
            defaultValue={name}
            onChange={this.onChange}
            error={this.hasError(name)}
            onBlur={this.onBlur}
          />
          <TextField
            required
            id="alphaAcids"
            type="number"
            label="Alpha acids (%)"
            margin="normal"
            variant="outlined"
            defaultValue={alphaAcids}
            onChange={this.onChange}
            error={this.hasError(alphaAcids)}
            onBlur={this.onBlur}
          />
          <TextField
            required
            id="description"
            label="Description"
            margin="normal"
            variant="outlined"
            multiline
            defaultValue={description}
            onChange={this.onChange}
            error={this.hasError(description)}
            onBlur={this.onBlur}
          />
        </form>
        <Button onClick={onClick} disabled={!this.formIsValid()}>UPDATE</Button>
      </Section>
    )
  }

  renderMutation = (hop) => {
    const data = {...this.state}
    delete data.id
    return (
      <Mutation
        mutation={UPDATE_HOP}
        variables={{ where: { id: this.state.id }, data }}
        refetchQueries={[{ query: HOPS_QUERY }]}
        awaitRefetchQueries
        onCompleted={({ hop }) => {
          this.props.history.push('/hops')
        }}
      >
        {( createHops, { loading, error }) => {
          if (loading) return <Loader />
          if (error) return <Error error={error} />

          return this.renderContent(hop, createHops)
        }}
      </Mutation>
    )
  }

  renderQuery = () => {
    return (
      <Query
        query={GET_HOP}
        variables={{ where: { id: this.state.id } }}
      >
        {
          ({ loading, error, data }) => {
            if (loading) return <Loader />
            if (error) return <Error error={error} />
            return this.renderMutation(data.hops)
          }
        }
      </Query>
    )
  }

  render() {

    return (
      <Fragment>
        <h2>Update Hop</h2>
        { this.renderQuery() }
      </Fragment>
    )
  }
}

export default withRouter(HopsUpdate)
