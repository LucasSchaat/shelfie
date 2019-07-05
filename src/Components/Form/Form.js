import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            price: 0,
            defaultImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvmqZ8U-_yLqCw689lAINC-YHugHvC-fVhkTxoCyJ1A-1VKAP',
            img: '',
            edit: props.edit,
            currentProductId: null
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.edit !== this.props.edit) {
            this.setState({ edit: this.props.edit })}}
    
    addNewProduct = () => {
        const { name, price, img } = this.state
        axios
            .post('/api/product', {name, price, img})
            .then(res => {
                this.props.getInventory()
                this.setState ({
                    name: '',
                    price: 0,
                    defaultImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvmqZ8U-_yLqCw689lAINC-YHugHvC-fVhkTxoCyJ1A-1VKAP',
                    img: ''
                })
            })
    }

    editProduct = () => {

    }
    
    flipEdit = () => {
        this.setState ({
            name: '',
            price: 0,
            defaultImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvmqZ8U-_yLqCw689lAINC-YHugHvC-fVhkTxoCyJ1A-1VKAP',
            img: '',
            currentProductId: this.props.currentProductId
        })
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState ({ [name]: value })
        if (name === 'img') {
            this.setState ({ defaultImg: value})
        }
    }

    clearInputs = e => {
        this.setState ({
            name: '',
            price: 0,
            defaultImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvmqZ8U-_yLqCw689lAINC-YHugHvC-fVhkTxoCyJ1A-1VKAP',
            img: ''
        })
    }
    
    render() {
        const { name, price, defaultImg, img, edit } = this.state
        console.log('form edit:', edit)
        console.log('props edit:', this.props.edit)
        
        return (
            <div className='formContainer'>
                <img src={defaultImg} alt ='specified product' />
                <div>Image URL:</div>
                <input name='img' value={img} onChange={this.handleChange} />
                <div>Product Name:</div>
                <input name='name' value={name} onChange={this.handleChange} />
                <div>Price:</div>
                <input name='price' value={price} onChange={this.handleChange} />
                <button onClick={this.clearInputs} >Cancel</button>
                <div>
                    { edit ? (
                        <button onClick={this.addNewProduct}>Add to Inventory</button>
                    ) : (
                        <button onClick={this.flipEdit}>Save Changes</button>
                    )}
                </div>
            </div>
        )
    }
}

export default Form