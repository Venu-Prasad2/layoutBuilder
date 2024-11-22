import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeft: true,
    showRight: true,
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  onToggleShowLeft = () => {
    this.setState(prevState => ({showRight: !prevState.showRight}))
  }

  onToggleShowRight = () => {
    this.setState(prevState => ({showRight: !prevState.showRight}))
  }

  render() {
    const {showContent, showLeft, showRight} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeft,
          showRight,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeft: this.onToggleShowLeft,
          onToggleShowRight: this.onToggleShowRight,
        }}
      >
        <div className="bg">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
