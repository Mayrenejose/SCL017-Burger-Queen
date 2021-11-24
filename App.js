import React, {useState} from "react";
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
  const [purchase, setPurchase] = useState([])
  
  const total =(purchase) =>{
        
    if(purchase.length>0) {
        let adition = 0;
        for(let i=0 ; i<purchase.length ; i++){
            adition = adition + purchase[i].price

        }
        return adition;
    } else{
        return 0;
    }

}


    return (
        <Router>
        <div>   
        
          <Switch>
          <Route exact path="/" component={ Inicio }/>
          <Route exact path="/garzon"> 
          <Garzon
          compra={purchase}
          setCompra={setPurchase}
          total ={total}
          />
          </Route>
          <Route exact path="/cocina" component={ KitchenRoom }/>
          <Route exact path="/burgerQueen" component={ BurgerQueen }/>

          </Switch>
        </div>
      </Router> 
    )
}
