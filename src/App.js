import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Inicio } from "./component/Inicio";
import  Garzon  from "./component/Garzon";
import { KitchenRoom } from "./component/KitchenRoom";
import BurgerQueen from "./component/BurgerQueen";

export const AppRouter = () => {
    return (
        <Router>
        <div>   
        
          <Switch>
          <Route exact path="/" component={ Inicio }/>
          <Route exact path="/garzon" component={ Garzon }/>
          <Route exact path="/cocina" component={ KitchenRoom }/>
          <Route exact path="/burgerQueen" component={ BurgerQueen }/>

          </Switch>
        </div>
      </Router> 
    )
}
