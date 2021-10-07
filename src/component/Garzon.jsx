import React from 'react';
//import data from './data/data.json';
import { Helmet } from "react-helmet";
//import bottom from '../assents/fondo.jpg';
import TableName from './TableName';
import ButtonsMenu from './ButtonsMenu';
import BackArrow from './BackArrow';
import Menu from './Menu';


const Garzon = () => {

    return (
        <React.Fragment>
            <Helmet>
                <style>{'body { background-color: #FACE7F; }'}</style>
            </Helmet>
            <TableName />
            <ButtonsMenu />

            <BackArrow />
            <Menu />
        </React.Fragment>

    )

}

export default Garzon


/*   <ul>
{
    data.map(item => (

        <li key ={item.id}>{item.name}</li>

  ))
}

<div>
                <img className="bottom" src={bottom} alt="fondo madera"></img>
            </div>

</ul>*/
