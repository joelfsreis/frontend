import React, { Component } from 'react'
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom'

const Head = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: white;
  display: flex;
  overflow: hidden;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.lightgrey};
  height: 7rem;

  > div {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin: auto 1rem;

    h1 {
      display: flex;
      align-items: center;

      > img {
        height: 4rem;
        margin-right: 0.5rem;
      }
    }

    nav {
      display: flex;
      flex: 1;
      align-self: center;
      justify-content: flex-end;

      a {
        text-transform: uppercase;
        color: ${props => props.theme.lightgrey};
        font-size: 1.5rem;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid ${props => props.theme.lightgrey};
        border-radius: 4px;
        padding: 1rem 1.5rem;
        margin: 0 0.5rem;
        opacity: 0.7;

        &.active {
          text-decoration: underline;
          text-decoration-style: double;
          opacity: 1;
        }

        &:hover {
          opacity: 1;
          transform: scale(1.1);
          transition: all 0.3s ease;
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
`

class Header extends Component {
  links = [
    { name: 'Home', path: '/' },
    { name: 'Beers', path: '/beers' },
    { name: 'Hops', path: '/hops', disabled: this.props.disableRoutes },
    { name: 'Grains', path: '/grains', disabled: this.props.disableRoutes },
    { name: 'Docs', path: '/docs' },
  ]

  getClassName = (link) => {
    const { pathname } = this.props.location;
    if (link.path === '/') {
      return pathname === '/' ? 'active' : ''
    }
    return !!link.disabled ? 'link-disabled' : pathname.indexOf(link.path) > -1 ? 'active' : ''
  }

  render() {
    return (
      <Head>
        <div>
          <h1>
            <img src="/img/graphql-logo.svg" alt="graphql-logo" /> GraphQL
          </h1>
          <nav>
            {
              this.links.map(link => (
                <Link
                  to={link.path}
                  className={this.getClassName(link)}
                  disabled={link.disabled}
                  key={link.name}
                >
                  {link.name}
                </Link>
              ))
            }
          </nav>
        </div>
      </Head>
    )
  }
}

export default withRouter(Header);
