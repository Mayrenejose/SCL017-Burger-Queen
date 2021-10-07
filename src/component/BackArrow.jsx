import React from 'react';
import arrow from '../assents/flecha-correcta.png';
import {
    Link
} from "react-router-dom";

const BackArrow = () => {
    return (
        <div>
           <Link to='/'><img className='arrow' src={ arrow } alt="back" /></Link>        
            
        </div>
    )
}

export default BackArrow
