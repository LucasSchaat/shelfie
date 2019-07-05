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
      currentProductId: null,
      edit: true
    }
    this.getInventory = this.getInventory.bind(this)
    this.editProduct = this.editProduct.bind(this)
  }

  componentDidMount() {
    axios
      .get('/api/inventory')
      .then( res => {
        console.log(res)
        this.setState({ inventory: res.data })
      })  
  }

  editProduct (id) {
    this.setState ({ currentProductId: id, edit: !this.state.edit })
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
    console.log(this.state.currentProductId)
    console.log(this.state.edit)
    return (
      <div className='App'>
        <Header />
        <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} editProduct={this.editProduct} />
        <Form
        inventory={this.state.inventory}
        getInventory={this.getInventory}
        currentProductId={this.state.currentProductId}
        edit={this.state.edit}
        />
      </div>
    );
  }
}

export default App;
