import React from 'react';
import arrow from '../assents/flecha-correcta.png';
import {
    Link
} from "react-router-dom";

const BackArrow = () => {
    return (
        <React.Fragment>
           <Link to='/'><img className='arrow' src={ arrow } alt="back" /></Link>        
            
        </React.Fragment>
    )
}

export default BackArrow
