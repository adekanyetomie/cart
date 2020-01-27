import React from 'react'
import {Switch, Route} from 'react-router-dom'
import 'bulma/css/bulma.css'
import Nav from './components/Nav'
import List from './components/List'
import Cart from './components/Cart'
import Details from './components/Details'
import Error404 from './components/404'



function App() {
  return (
    <div className="App">
       <Nav/>
       <Switch>
         <Route exact path = '/' component={List}/>
         <Route path = '/details' component={Details}/>
         <Route path = '/mycart' component={Cart}/>
         <Route component={Error404}/>
         
         
       </Switch>
       
    </div>
  );
}

export default App;
