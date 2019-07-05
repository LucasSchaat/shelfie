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
      inventory: [
        {name: 'Nike Air Max 2', price: 56, img: 'https://images-na.ssl-images-amazon.com/images/I/91%2B6DFw0B4L._UX395_.jpg'},
        {name: 'Nike Air Monarch IV', price: 40, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxsqKawnX7DSEOtsMfvPnroEk7NwD9wNam9XcRdb0RFEdYp_cyg'},
        {name: 'Nike Air Max 1G', price: 70, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCZL2RCN6aw8Trk9lP5JEvLcT33xVRQ-K22ZdY8QcOXd3_N3_1g'}
      ]
    }
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
