import React from 'react';
import { ButtonToggle } from 'reactstrap';

class TableName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
         value: '' ,
         number: '' 
        }
        
        this.inputChange = this.inputChange.bind(this);
        this.handleName = this.handleName.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    inputChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleName = (event) => {
        event.preventDefault()
        console.log(this.state.value);
        
    }

    onClick = (event) => {
        this.setState({ number : event.target.name})
        console.log(this.state.number);
        
    }

    render() {

    return (
            <div className = 'customerName' >
            <form onSubmit={this.handleName}>
                <input className='inputCustomer' type="text" name="name" id="nameCustomer" placeholder="Nombre cliente" value={this.state.value} onChange={this.inputChange} />
                <input className='clickCustomer' type="submit" value="Click" />
            </form>
            <div>
               <ButtonToggle className='tableOne' size='lg' type='button' name = 'MESA 1' onClick={this.onClick}>MESA 1</ButtonToggle>
               <ButtonToggle className='tableTwo' size='lg' type='button' name = 'MESA 2' onClick={this.onClick}>MESA 2</ButtonToggle>
               <ButtonToggle className='tableThree' size='lg' type='button' name = 'MESA 3' onClick={this.onClick}>MESA 3</ButtonToggle>
               <ButtonToggle className='tableFour' size='lg' type='button' name = 'MESA 4' onClick={this.onClick}>MESA 4</ButtonToggle>
           </div>
           <p className='titleNameTable'>Hola {this.state.number} {this.state.value}</p>
            </div>
            
        )
    }

};

export default TableName;
