import React, { Component } from 'react'


const contextProvider = React.createContext();

class ProductProvider extends Component {
    render() {
        return (
           <contextProvider.Provider value = "hello from context api" >
               
                {this.props.children}

           </contextProvider.Provider>    
           
        )
    }                                   
}
const ProductConsumer = contextProvider.Consumer

export {ProductConsumer, ProductProvider}
