import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            defaultImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvmqZ8U-_yLqCw689lAINC-YHugHvC-fVhkTxoCyJ1A-1VKAP',
            imgurl: ''
        }
   
    }

    
    handleChange = e => {
        let { name, value } = e.target
        this.setState ({ [name]: value })
        if (name === 'imgurl') {
            this.setState ({ defaultImg: value})
        }
    }

    clearInputs = e => {
        this.setState ({
            name: '',
            price: 0,
            defaultImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvmqZ8U-_yLqCw689lAINC-YHugHvC-fVhkTxoCyJ1A-1VKAP',
            imgurl: ''
        })
    }
    
    render() {
        const { name, price, defaultImg, imgurl } = this.state
        console.log(this.state.defaultImg)
        
        return (
            <div className='formContainer'>
                <img src={defaultImg} alt ='specified product' />
                <div>Image URL:</div>
                <input name='imgurl' value={imgurl} onChange={this.handleChange} />
                <div>Product Name:</div>
                <input name='name' value={name} onChange={this.handleChange} />
                <div>Price:</div>
                <input name='price' value={price} onChange={this.handleChange} />
                <button onClick={this.clearInputs} >Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form