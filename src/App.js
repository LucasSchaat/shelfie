import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      currentProduct: null
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    axios
      .get('/api/inventory')
      .then( res => {
        console.log(res)
        this.setState({ inventory: res.data })
      })  
  }

  getInventory() {
    axios
      .get('/api/inventory')
      .then( res => {
        console.log(res)
        this.setState({ inventory: res.data })
      })
  }

  

  render () {
    return (
      <div className='App'>
        <Header />
        <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} />
        <Form inventory={this.state.inventory} getInventory={this.getInventory} />
      </div>
    );
  }
}

export default App;
