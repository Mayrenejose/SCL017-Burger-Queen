import React from 'react';
import { Helmet } from "react-helmet";
//import bottom from '../assents/fondo.jpg';
import TableName from './TableName';
import ButtonsMenu from './ButtonsMenu';
import BackArrow from './BackArrow';

const BurgerQueen = () => {
    return (
        <React.Fragment>
        <Helmet>
            <style>{'body { background-color: #FACE7F; }'}</style>
        </Helmet>
        <TableName />
        <ButtonsMenu />
        
        <BackArrow />
    </React.Fragment>

    )
}

export default BurgerQueen
