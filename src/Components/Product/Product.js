import React, {Component} from 'react'

class Product extends Component {
    
    deleteProduct = () => {
        this.props.deleteProduct(this.props.id)
    }
    
    render() {
        return (
            <div className='formContainer'>
                <div>{this.props.name}</div>
                <div>{this.props.price}</div>
                <div>{this.props.img}</div>
                <button onClick={this.deleteProduct}>
                    Delete
                </button>
            </div>
        )
    }
}

export default Product