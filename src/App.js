import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import 'typeface-roboto';

import theme from './theme';
import apolloClient from './apolloClient';

import Home from './pages/Home';
import Beers from './pages/Beers';
import Header from './components/Header';
import Documentation from './pages/Documentation';
import NotFound from './pages/NotFound';

const Page = styled.div`
  background-color: ${props => props.theme.lightBackgroundColor};
`

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  background-color: ${props => props.theme.lightBackgroundColor};
  box-shadow: ${props => props.theme.bs};
  border-radius: 0.5rem;
  margin: 14rem auto 0;
  padding: 2rem;
  min-height: calc(100vh - 14rem);
`
// UPDATE THIS CONST AND START DEVELOPMENT
export const DEVELOPMENT_IS_READY = false

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Router>
          <ThemeProvider theme={theme}>
            <Page>
            <Header />
              <Container>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/beers' component={Beers} />
                  <Route exact path='/docs' component={Documentation} />
                  <Route component={NotFound} />
                </Switch>
              </Container>
            </Page>
          </ThemeProvider>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
