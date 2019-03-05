import React, { Component } from 'react'
import Chip from '@material-ui/core/Chip';

import Tutorial from '../components/Tutorial'
import TutorialComplete from '../components/TutorialComplete'
import { DEVELOPMENT_IS_READY } from '../App';

class Home extends Component {
  state = {
    tutorialComplete: false,
  }
  componentWillMount() {
    this.setState({ tutorialComplete: !!localStorage.getItem('tutorialComplete') })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ tutorialComplete: !!localStorage.getItem('tutorialComplete') })
  }

  endTutorial = () => {
    this.setState({ tutorialComplete: true })
  }

  resetTutorial = (e) => {
    e.preventDefault()
    const reset = window.confirm('Are you sure you want to reset the workshop?')
    if (reset) {
      localStorage.clear()
      this.setState({ tutorialComplete: false })
    }
  }

  render() {
    const { tutorialComplete } = this.state
    return (
      <section>
        <h2>
          GraphQL Workshop { tutorialComplete && !DEVELOPMENT_IS_READY ?
          <Chip
            label="Reset workshop"
            onClick={this.resetTutorial}
          /> : null }
        </h2>
        { tutorialComplete ? <TutorialComplete /> : <Tutorial endTutorial={this.endTutorial}/> }
      </section>
    )
  }
}

export default Home;