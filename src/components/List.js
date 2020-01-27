import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {store} from '../data'

export default class List extends Component {
    state ={
        product:[store]
    }

    render() {
        console.log(this.state.product)
        return (
            <React.Fragment>
                <div className= "is-large is-primary">
                    <Title title = "Product List"/>
        
                </div>
            </React.Fragment>
            
        )
    }
}
