import React, { Component } from 'react'
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

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
  height: 14rem;

  > div {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin: auto 2rem;

    h1 {
      display: flex;
      align-items: center;

      > img {
        height: 8rem;
        margin-right: 1rem;
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
        font-size: 3rem;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid ${props => props.theme.lightgrey};
        border-radius: 4px;
        padding: 2rem 3rem;
        margin: 0 1rem;
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

const links = [
  { name: 'Home', path: '/' },
  { name: 'Beers', path: '/beers' },
  { name: 'Hops', path: '/hops' },
  { name: 'Grains', path: '/grains' },
  { name: 'Docs', path: '/docs' },
]

class Header extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <Head>
        <div>
          <h1>
            <img src="/img/graphql-logo.svg" alt="graphql-logo" /> GraphQL
          </h1>
          <nav>
            {
              links.map(link => (
                <Link
                  to={link.path}
                  className={pathname === link.path ? 'active' : ''}
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
