import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props) {
        super()
    }
    
    render() {
        return (
            <div className='formContainer'>
                <div>Dashboard</div>
                <div className='inventoryContainer'>
                    {this.props.inventory.map( product => {
                        return (
                            <Product 
                            name={product.name}
                            price={product.price}
                            img={product.img}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Dashboard