import React, {Component} from 'react'

class Product extends Component {
    render() {
        return (
            <div className='formContainer'>
                <div>{this.props.name}</div>
                <div>{this.props.price}</div>
                <div>{this.props.img}</div>
            </div>
        )
    }
}

export default Product