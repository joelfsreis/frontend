import React, { Component } from 'react'

import styled from 'styled-components';

// Thanks for the CSS code for the Beer animation :)
// https://codepen.io/HerrBertling/pen/EWVoPw

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  opacity: 0.9;
  background-color: ${props => props.theme.lightgrey};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .glass-wrapper {
    position: relative;
  }

  .glass {
    border: 0.5rem solid white;
    border-bottom-width: 16px;
    border-top: transparent;
    border-radius: 0 0 4px 4px;
    height: 15rem;
    width: 9rem;
    transform: perspective(15rem) rotateX(-10deg);
    position: relative;
    overflow: hidden;
  }

  .beer {
    height: 90%;
    width: 100%;
    background-color: ${props => props.theme.beerColor};
    position: absolute;
    bottom: 0;
    transform: scaleY(1);
    transform-origin: bottom;
    animation: beer-fill ${props => props.theme.animationDuration} linear infinite;
  }

  .bubble {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    background-color: rgba(0,0,0,0.2);
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    animation: bubble-rise ${props => props.theme.animationDuration} infinite;
  }

  .bubble:nth-child(1) {
    left: 3.7%;
    bottom: 0.4%;
    animation-duration: ${props => props.theme.animationDuration} - 140ms;
    animation-delay: 140ms;
  }
  .bubble:nth-child(2) {
    left: 51%;
    bottom: 6.4%;
    animation-duration: ${props => props.theme.animationDuration} - 360ms;
    animation-delay: 360ms;
  }
  .bubble:nth-child(3) {
    left: 18%;
    bottom: 1.4%;
    animation-duration: ${props => props.theme.animationDuration} - 60ms;
    animation-delay: 60ms;
  }
  .bubble:nth-child(4) {
    left: 83%;
    bottom: 9.1%;
    animation-duration: ${props => props.theme.animationDuration} - 410ms;
    animation-delay: 410ms;
  }
  .bubble:nth-child(5) {
    left: 58%;
    bottom: 14.7%;
    animation-duration: ${props => props.theme.animationDuration} - 70ms;
    animation-delay: 70ms;
  }
  .bubble:nth-child(6) {
    left: 13%;
    bottom: 3.6%;
    animation-duration: ${props => props.theme.animationDuration} - 230ms;
    animation-delay: 230ms;
  }
  .bubble:nth-child(7) {
    left: 73%;
    bottom: 0.4%;
    animation-duration: ${props => props.theme.animationDuration} - 100ms;
    animation-delay: 100ms;
  }
  .bubble:nth-child(8) {
    left: 41%;
    bottom: 14.4%;
    animation-duration: ${props => props.theme.animationDuration} - 310ms;
    animation-delay: 310ms;
  }
  .bubble:nth-child(9) {
    left: 35%;
    bottom: 0.4%;
    animation-duration: ${props => props.theme.animationDuration};
  }

  .foambubble {
    display: inline-block;
    width: 70px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: -15px;
    z-index: 2;
  }

  .foambubble:nth-child(1) {left: -21%;}
  .foambubble:nth-child(2) {left: 3%;}
  .foambubble:nth-child(3) {left: 18%;}
  .foambubble:nth-child(4) {left: 37%;}
  .foambubble:nth-child(5) {left: 65%;}

  .foamtop {
    position: absolute;
    z-index: 2;
    top: -35px;
    left: 0;
    width: 100%;
    height: 60px;
    animation: ftbubble-appear 4s infinite;
  }
  .ft-bubble {
    display: inline-block;
    width: 90px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 0;
  }

  .ft-bubble:nth-child(1) {left: -12%}
  .ft-bubble:nth-child(2) {left: 13%}
  .ft-bubble:nth-child(3) {left: 43%}
  .ft-bubble:nth-child(4) {left: 57%}

  .coaster {
    height: 1rem;
    width: 120%;
    margin-left: -10%;
    margin-top: -10%;
    background-color: rgba(50,50,50,0.5);
  }

  @keyframes beer-fill {
    0% {
      transform: scaleY(0);
    }
    48%,
    100% {
      transform: scaleY(1);
    }
  }

  @keyframes bubble-rise {
    0%,
    20% {
      opacity: 0;
      transform: translate3d(0,0,0);
    }
    85% {
      opacity: 1;
      transform: translate3d(0, -1920%, 0);
    }
    100% {
      opacity: 0.5;
      transform: translate3d(0, -1870%, 0);
    }
  }

  @keyframes ftbubble-appear {
    0%,
    40%{
      opacity: 0;
      transform: translateY(35px) scale3d(0,0,0);
    }
    42% {
      opacity: 0;
      transform: translateY(27px) scale3d(0.4,0,0);
    }
    67%,
    100% {
      opacity: 1;
      transform: translateY(0px) scale3d(1,1,0);
    }
  }
`

class Loader extends Component {
  render() {
    return (
      <Wrapper>
        <div className="glass-wrapper">
          <div className="glass">
            <div className="beer">
              <div className="foam">
                <span className="foambubble"></span>
                <span className="foambubble"></span>
                <span className="foambubble"></span>
                <span className="foambubble"></span>
                <span className="foambubble"></span>
              </div>
              <div className="bubbles">
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
                <span className="bubble"></span>
              </div>
            </div>
          </div>
          <div className="foamtop">
            <span className="ft-bubble"></span>
            <span className="ft-bubble"></span>
            <span className="ft-bubble"></span>
            <span className="ft-bubble"></span>
          </div>
          <div className="coaster"></div>
        </div>
      </Wrapper>
    )
  }
}

export default Loader