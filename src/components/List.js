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
                <div className= "columns">
                    <div className= "column">
                        <ProductConsumer>
                            {hello => {
                                console.log(hello)
                            }}
                        </ProductConsumer>

                    </div>

                </div>
            </Fragment>
            
        )
    }
}
