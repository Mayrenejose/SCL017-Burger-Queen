import React from 'react';
import { ButtonToggle } from 'reactstrap';
import {
    Link
} from "react-router-dom";

class ButtonsMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    render() {
        return (
            <React.Fragment>
                
                    <Link to='/garzon'> <ButtonToggle className='menuButtonsOne' size='lg'>DESAYUNO</ButtonToggle>
                    </Link>
                
                    <Link to='/burgerQueen'> <ButtonToggle className='menuButtons' size='lg'>BURGER QUEEN</ButtonToggle></Link>
                

            </React.Fragment>


        )
    }

};

export default ButtonsMenu