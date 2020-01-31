import React, { Component , Fragment} from 'react'
import Product from './Product'
import Title from './Title'
import {store} from '../data'
import {ProductConsumer} from "../context"

export default class List extends Component {
    state ={
        product:[store]
    }

    render() {
        return (
            <Fragment>
                <div className= "is-large is-primary">
                    <Title title = "Product List"/>
                </div>
                    <div className= "column">
                        <ProductConsumer>
                            {value=>{ return<h1>{value}</h1> }}
                        </ProductConsumer>

                    </div>
            </Fragment>
            
        )
    }
}
