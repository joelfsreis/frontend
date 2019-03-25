import React, { Component, Fragment } from 'react'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';

import Button from '../components/Button'
import { Mutation } from 'react-apollo';

const Section = styled.section`
  form {
    display: flex;
    flex-direction: column;
  }
`
const Label = styled(InputLabel)`
  && {
    margin-top: 0.5rem;
    font-size: 0.75rem;
  }
`

// MOCK DATA, REPLACE WITH DATA FROM YOGA SERVER!!!
const hopsList = [{id: 'asdbas', name: 'Citra'} , { id: 'aksdansj', name: 'Simcoe' }]
const grainsList = [{ id: 123, name: 'Pils' }, { id: 12312, name: 'Pale Ale'}]

export default class BeerCreate extends Component {
  constructor() {
    super()

    this.state = {
      type: undefined,
      brewery: undefined,
      name: undefined,
      description: undefined,
      hops: [],
      grains: [],
      abv: undefined,
      ibu: undefined,
      ebc: undefined,
    }

    this.hopsDict = hopsList.reduce((acc, item) => {
      acc[item.id] = item.name
      return acc
    }, {})

    this.grainsDict = grainsList.reduce((acc, item) => {
      acc[item.id] = item.name
      return acc
    }, {})
  }

  onChange = (e) => {
    e.preventDefault()
    if (e.target.name && !e.target.id) {
      this.setState({ [e.target.name]: e.target.value })
    } else {
      this.setState({ [e.target.id]: e.target.type === 'number' ? Number(e.target.value) : e.target.value })
    }
  }

  onBlur = (e) => {
    e.preventDefault()
    if (this.state[e.target.id] === undefined) {
      this.setState({ [e.target.id]: '' })
    }
  }

  hasError = (value) => value !== undefined && !value

  formIsValid = () => {
    const {
      type,
      brewery,
      name,
      description,
      abv,
      hops,
      grains
    } = this.state
    return  !!type && !!brewery && !!name && !!description && !!abv && !!hops && hops.length > 0 && !!grains && grains.length > 0
  }

  renderSelect = (name, value, opt) => {
    const upperCaseName = name.slice(0, 1).toUpperCase() + name.slice(1, name.length)
    return (
      <Fragment>
        <h4>{upperCaseName} *</h4>
        <Select
          id={name}
          multiple
          variant="outlined"
          value={value}
          onChange={this.onChange}
          input={<OutlinedInput labelWidth={0} type="select" name={name} />}
          renderValue={selected => (
            <div>
              {selected.map(value => <Chip key={value} label={this[`${name}Dict`][value]} color="secondary" />)}
            </div>
          )}
        >
          {opt.map(el => (
            <MenuItem key={el.id} value={el.id} >
              {el.name}
            </MenuItem>
          ))}
        </Select>
        <Label htmlFor="hops">The specially selected {upperCaseName}</Label>
      </Fragment>
    )
  }

  renderContent = () => {
    const { type, brewery, name, description, hops, grains, abv, ibu, ebc } = this.state;
    return (
      <Section>
        <form>
          <TextField
            required
            id="type"
            label="Beer type"
            margin="normal"
            variant="outlined"
            defaultValue={type}
            onChange={this.onChange}
            error={this.hasError(type)}
            onBlur={this.onBlur}
          />
          <TextField
            required
            id="brewery"
            label="Brewery name"
            margin="normal"
            variant="outlined"
            defaultValue={brewery}
            onChange={this.onChange}
            error={this.hasError(brewery)}
            onBlur={this.onBlur}
          />
          <TextField
            required
            id="name"
            label="Beer name"
            margin="normal"
            variant="outlined"
            defaultValue={name}
            onChange={this.onChange}
            error={this.hasError(name)}
            onBlur={this.onBlur}
          />
          <TextField
            required
            id="abv"
            label="Alcohol by volume - ABV (%)"
            margin="normal"
            variant="outlined"
            defaultValue={abv}
            onChange={this.onChange}
            error={this.hasError(abv)}
            onBlur={this.onBlur}
          />
          <TextField
            id="ibu"
            type="number"
            label="International bittering unit - IBU"
            margin="normal"
            variant="outlined"
            defaultValue={ibu}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <TextField
            id="ebc"
            type="number"
            label="Estimated beer color - EBC"
            margin="normal"
            variant="outlined"
            defaultValue={ebc}
            onChange={this.onChange}
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
          { this.renderSelect('hops', hops, hopsList) }
          { this.renderSelect('grains', grains, grainsList) }
        </form>
        <Button disabled={!this.formIsValid()}>CREATE</Button>
      </Section>
    )
  }

  // TODO
  renderQuery = () => {
  }

  // TODO
  renderMutation = () => {
    return (
      <Mutation></Mutation>
    )
  }

  render() {
    
    return (
      <Fragment>
        <h2>Create Beer</h2>
        { this.renderContent() }
      </Fragment>
    )
  }
}
