import './App.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Home from './container/Home'
import Register from './container/Register';
import Carttable from './container/Carttable';
import Checkout from './container/Checkout'
// import HistoryClient from './container/HistoryClient';
import store from '../src/redux/store'
import { Provider } from 'react-redux';
import ItemDetails from '../src/container/ItemDetails.js'
import Oitempost from './container/Oitempost';
import Login from './container/Login';

function App() { 
  return (
    <Provider store={store}>
    <div className="App">
     <Router>
       <Switch>
         <Route path="/login" exact><Login /></Route>
         <Route path="/register" exact><Register /></Route>
         <Route path="/" exact><Home /></Route>
         <Route path="/additem" exact><Oitempost /></Route>
         <Route path="/details/:itemid" ><ItemDetails /></Route>
         <Route path="/cart" exact><Carttable /></Route>
         {/* <Route path="/history" exact><HistoryClient /></Route> */}
         <Route path="/checkout" exact><Checkout /></Route>
        

       </Switch>
     </Router>
    </div>
    </Provider>
  );
}

export default App;
