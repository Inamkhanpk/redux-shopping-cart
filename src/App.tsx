



import React from "react"
import { Container } from "@material-ui/core"
import { Provider } from "react-redux"

import { store } from "./store"
import  Cart  from "./components/Cart"
import  Product  from "./components/Product"
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
         
        <Router>
    <Switch>
      <Route exact path="/">
        <Product />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  </Router>
      </Container>
    </Provider>
  )
}

export default App

