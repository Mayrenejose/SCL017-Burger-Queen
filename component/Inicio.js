import React from 'react';
import {
    Link
} from "react-router-dom";
import { Button } from 'reactstrap';
import img from '../assents/logoBQ.png';
import './styles/style.css';
import { Helmet } from "react-helmet";
import fondo from '../assents/fondo.jpg';


export const Inicio = () => {
    return (
        <React.Fragment>
            <Helmet>
                <style>{`body { background: url(${fondo});}`}</style>,
                <style>{`body { background-repeat-x: no-repeat;}`}</style>,
                <style>{`body { background-size: cover;}`}</style>,

            </Helmet>
            <div>
                <img className="logoBQ" src={img} alt="logoBurgerQueen"></img>
            </div>
            <div>
                <Link to='/garzon'><Button className="buttonInicio" size="lg">GARZON</Button></Link>
            </div>

            <div>
            <Link to='/cocina'><Button className="buttonInicioOne" size="lg">COCINA</Button></Link>
              
            </div>

        </React.Fragment>


    )
}
