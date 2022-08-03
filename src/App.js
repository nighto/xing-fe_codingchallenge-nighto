import React from 'react'
import List from './components/List/List'
import Detail from './components/Detail/Detail'
import config from './config'
import './App.scss'

class App extends React.Component {

  componentDidMount() {
    fetch(config.FACTS_URL)
      .then(response => response.json())
      .then(facts => {
        this.setState(() => ({
          facts,
          filteredFacts: facts,
        }))
      })
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedFactId: 0
    }
  }

  handleFactChange = (id, e) => {
    this.setState(() => ({
      selectedFactId: id,
    }))
  }

  handleFiltering = e => {
    let value = e.target.value
    let filteredFacts
    if (value) {
      filteredFacts = this.state.facts.filter(fact => fact.text.toLowerCase().includes(value.toLowerCase()))
    } else {
      filteredFacts = this.state.facts
    }
    this.setState(() => ({
      filterInput: value,
      filteredFacts
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Cat Facts</h1>
        <div className="content">
          <div className="container">
            <input type="text" className="filterInput" placeholder="🔍 Type here to filter" onChange={this.handleFiltering}/>
            <List facts={this.state.filteredFacts} selectedFactId={this.state.selectedFactId} handleFactChange={this.handleFactChange}/>
          </div>
          <div className="container">
            { this.state.facts ?
              <Detail facts={this.state.facts} index={this.state.selectedFactId}/> :
              'Please wait, loading cat facts...'
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
