import React, { Component } from 'react'
import styled from 'styled-components'
import { TextField, MenuItem } from '@material-ui/core';
import Button from '../components/Button'
import { request } from 'graphql-request'
import gql from 'graphql-tag'

const Section = styled.section`
  form {
    display: flex;
    flex-direction: column;
  }
`
const PRISMA_URL = 'https://eu1.prisma.sh/workshop-review/workshop-reviews/dev/'

const REVIEW_AVALIATION = ['Terrible', 'Bad', 'Satisfactory', 'Good', 'Excellent']
const REVIEW_DIFFICULTY = ['Very difficult', 'Difficult', 'Suitable', 'Easy', 'Very easy']
const REVIEW_USING_GRAPHQL = ['Yes', 'No', 'Maybe']
const REVIEW_BOOL = ['Yes', 'No']

class Review extends Component {
  constructor() {
    super()

    this.state = {}
  }
  onChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.id || e.target.name]: e.target.value })
  }

  onSubmit = async (e) => {
    e.preventDefault()
    // const mutation = gql`
    //   mutation CREATE_REVIEW_MUTATION($data: CreateReviewInput!) {
    //     createReview(data: $data) {
    //       id
    //     }
    //   }
    // `
    // const body = {
    //   operationName: 'CREATE_REVIEW_MUTATION',
    //   variables: { data: { ...this.state } },
    //   query: `mutation CREATE_REVIEW_MUTATION($data: CreateReviewInput!) {
    //     createReview(data: $data) {
    //       id
    //     }
    //   }
    // `
    // }
    // const result = await fetch(PRISMA_URL, {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // }, JSON.stringify(body))
    // const result = await request(PRISMA_URL, mutation, {data: {...this.state}})
    // debugger
  }

  render() {
    const { avaliation, difficulty, useGraphQL, internship } = this.state
    console.log(this.state)
    return (
      <Section>
        <h2>Workshop Review (Optional, but we appreciate if you submit it!)</h2>
        <form>
          <TextField
            id="email"
            label="Email"
            margin="normal"
            variant="outlined"
            helperText="Leave your email if you want to subscribe to our newsletter with exclusive web development content"
            onChange={this.onChange}
          />
          <TextField
            id="universityInfo"
            label="University / Course / Course year"
            margin="normal"
            variant="outlined"
            helperText="eg: FCT / LEI / 3"
            onChange={this.onChange}
          />
          <TextField
            select
            name="avaliation"
            label="How do you rate this workshop?"
            margin="normal"
            variant="outlined"
            value={avaliation || ''}
            onChange={this.onChange}
          >
            { REVIEW_AVALIATION.map(opt => <MenuItem key={opt} id={opt} value={opt}>{opt}</MenuItem>) }
          </TextField>
          <TextField
            select
            name="difficulty"
            label="How do you rate the difficulty of this workshop?"
            margin="normal"
            variant="outlined"
            value={difficulty || ''}
            onChange={this.onChange}
          >
            { REVIEW_DIFFICULTY.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>) }
          </TextField>
          <TextField
            select
            name="useGraphQL"
            label="Would you use GraphQL on FCT Nova Hackathon?"
            margin="normal"
            variant="outlined"
            value={useGraphQL || ''}
            onChange={this.onChange}
          >
            { REVIEW_USING_GRAPHQL.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>) }
          </TextField>
          <TextField
            id="futureSubjects"
            label="What subjects/technologies would you like to hear on a future workshop from us?"
            margin="normal"
            variant="outlined"
            multiline
            onChange={this.onChange}
          />
          <TextField
            select
            name="internship"
            label="Have you heard about Imaginary Cloud's academic internships with FCT?"
            margin="normal"
            variant="outlined"
            value={internship || ''}
            onChange={this.onChange}
          >
            { REVIEW_BOOL.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>) }
          </TextField>
          <TextField
            id="sugestions"
            label="Is there any way we can improve your workshop experience?"
            margin="normal"
            variant="outlined"
            multiline
            onChange={this.onChange}
          />
        </form>
        <Button onClick={this.onSubmit}>SEND</Button>
      </Section>
    )
  }
}

export default Review