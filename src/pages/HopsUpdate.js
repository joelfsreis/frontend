import React, { Component, Fragment } from 'react'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import Button from '../components/Button'

const Section = styled.section`
  form {
    display: flex;
    flex-direction: column;
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

  renderContent = (hop) => {
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
        <Button disabled={!this.formIsValid()}>UPDATE</Button>
      </Section>
    )
  }

  render() {
    
    return (
      <Fragment>
        <h2>Update Hop</h2>
        { this.renderContent(this.state) }
      </Fragment>
    )
  }
}

export default withRouter(HopsUpdate)