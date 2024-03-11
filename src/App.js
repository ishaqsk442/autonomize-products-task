import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import {Route, Switch} from 'react-router-dom'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Products} />
      <Route exact path="/products/:id" component={ProductItemDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
