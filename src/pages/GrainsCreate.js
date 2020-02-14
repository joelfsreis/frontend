import React, { Fragment, useState } from 'react'
import { withRouter } from "react-router-dom";
import { TextField } from '@material-ui/core'
import styled from 'styled-components'
import Button from '../components/Button'
import Loader from '../components/Loader';
import Error from '../components/Error';

import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { GRAINS_QUERY } from './Grains';

const Section = styled.section`
  form {
    display: flex;
    flex-direction: column;
  }
`

function GrainsCreate ({ history }) {
  const [formData, setFormData] = useState({
    name: undefined,
    ebc: undefined,
    description: undefined,
  })

  const onChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.id]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
    })
  }

  const onBlur = (e) => {
    e.preventDefault()
    if (formData[e.target.id] === undefined) {
      setFormData({
        ...formData,
        [e.target.id]: '',
      })
    }
  }

  const hasError = (value) => value !== undefined && !value

  const formIsValid = () => {
    const { name, ebc, description } = formData
    return !!name && !!ebc && !!description
  }

  const renderContent = (onClick) => {
    const { name, ebc, description } = formData;
    return (
      <Section>
        <form>
          <TextField
            required
            id="name"
            label="Grain name"
            margin="normal"
            variant="outlined"
            defaultValue={name}
            onChange={onChange}
            error={hasError(name)}
            onBlur={onBlur}
          />
          <TextField
            required
            id="ebc"
            type="number"
            label="Estimated beer color - EBC"
            margin="normal"
            variant="outlined"
            defaultValue={ebc}
            onChange={onChange}
            error={hasError(ebc)}
            onBlur={onBlur}
          />
          <TextField
            required
            id="description"
            label="Description"
            margin="normal"
            variant="outlined"
            multiline
            defaultValue={description}
            onChange={onChange}
            error={hasError(description)}
            onBlur={onBlur}
          />
        </form>
        <Button onClick={onClick} disabled={!formIsValid()}>CREATE</Button>
      </Section>
    )
  }

  // TODO
  const renderMutation = () => {
  }

  return (
    <Fragment>
      <h2>Create Grain</h2>
      { renderContent() }
    </Fragment>
  )
}


export default withRouter(GrainsCreate)
