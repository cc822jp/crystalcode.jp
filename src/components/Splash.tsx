import React from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg'
import './Splash.css'

interface State {
  isLoaded: boolean
}

class Splash extends React.Component<{}, State> {
  state: State = {
    isLoaded: false
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.setState({
          isLoaded: true
        })
      }, 500)
    })
  }

  render() {
    return (
      <div className={this.state.isLoaded ? 'splash is-animate' : 'splash'}>
        <div className="logo">
          <Logo className={this.state.isLoaded ? 'is-animate' : ''}></Logo>
        </div>
      </div>
    )
  }
}

export default Splash
