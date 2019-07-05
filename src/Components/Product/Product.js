import React, {Component} from 'react'

class Product extends Component {
    
    deleteProduct = () => {
        this.props.deleteProduct(this.props.id)
    }

    editProduct = () => {
        this.props.editProduct(this.props.id)
    }
    
    render() {
        return (
            <div className='formContainer'>
                <div>{this.props.name}</div>
                <div>{this.props.price}</div>
                <div>{this.props.img}</div>
                <button onClick={this.deleteProduct}>Delete</button>
                <button onClick={this.editProduct}>Edit</button>
            </div>
        )
    }
}

export default Product