import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import styled from 'styled-components'

import Loader from '../components/Loader'
import Beer from '../components/Beer'
import Button from '../components/Button'
import { DEVELOPMENT_IS_READY } from '../App';
import Error from '../components/Error';

const BEERS_QUERY = gql`
  # query BEERS_QUERY {
  #   beers {
  #     id
  #     brewery
  #     name
  #   }
  # }
  query MOCK_BEERS_QUERY {
    mockBeers {
      id
    }
  }
`

const BeerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* background-color: ${props => props.theme.backgroundColor} */
  > div {
    /* flex: 1 1 32%; */
    width: 32%;
    margin-top: 1rem;
  }
`

const Static = styled.div`
  code {
    display: inline-flex;
  }
`

class Beers extends Component {
  renderStaticView = () => {
    return (
      <Static>
        <p>But why beer?</p>
        <img src="/img/homer-beer.gif" alt="homer-beer-gif" />
        <p>Because everyone loves it! We going to build a list of beer recipes, hops varieties and different grains</p>
        <p>
          With this simple example we will explore the power of GraphQL for querying and mutating data all with the easy setup of a Prisma database.
          Creating relations between tables is done adding the type Hops and Grains to the type Beers in our <code>datamodel.prisma</code> and Prisma will
          take care of creating the relations for us.
        </p>
        <p>Check the documentation to know how to do your Queries, Mutations and resolvers on your backend!</p>
        <p>
          <strong>
            After you read all the documentation change the variable <code>DEVELOPMENT_IS_READY</code> from <code>src/App.js</code> to
            true to start implementing your Queries and Mutations
          </strong>
        </p>
        <Link to="/docs"><Button>DOCUMENTATION</Button></Link>
      </Static>
    )
  }

  renderQuery = () => {
    return (
      <Query query={BEERS_QUERY}>
        {({ loading, error, data }) => {
          console.log(error)
          if (loading) return <Loader></Loader>
          if (error) return <Error error={error}></Error>
          // if (error) return <code>{JSON.stringify(error, null, 2)}</code>
          // <BeerList><Beer></Beer><Beer></Beer><Beer></Beer><Beer></Beer></BeerList>
          // TODO: UPDATE THIS VARIABLE WHEN YOU UPDATE YOUR QUERY
          const beers = data.mockBeers
          if (beers.length === 0) return <BeerList><Beer></Beer><Beer></Beer><Beer></Beer><Beer></Beer></BeerList>
          return beers.map(({ id, brewery, name }) => (
            <div key={id}>
              <p>{brewery}: {name}</p>
            </div>
          ));
        }}
      </Query>
    )
  }
  render() {
    return (
      <section>
        <h2>Beers</h2>
        { DEVELOPMENT_IS_READY ? this.renderQuery() : this.renderStaticView() }
      </section>
    )
  }
}

export default Beers;