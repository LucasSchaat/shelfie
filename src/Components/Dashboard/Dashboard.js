import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props) {
        super()
    }

    deleteProduct = (id) => {
        axios
            .delete(`/api/inventory/${id}`)
            .then(res => {
                this.props.getInventory()
            })
    }
    
    render() {
        return (
            <div className='formContainer'>
                <div>Dashboard</div>
                <div className='inventoryContainer'>
                    {this.props.inventory.map( product => {
                        return (
                            <Product 
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            img={product.img}
                            deleteProduct={this.deleteProduct}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Dashboard