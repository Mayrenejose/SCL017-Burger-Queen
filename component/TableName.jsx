import React from 'react';
import { ButtonToggle } from 'reactstrap';

export default function TableName({ name, setName, table, setTable}) {

 
    return (
        <div>
            <form>
                
                <input type="text"
                    name="cliente"
                    className= 'inputCustomer'
                    placeholder='Nombre cliente'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </form>
            <div>
                    <ButtonToggle value='Mesa 1' className='tableOne' size='lg' type='button' name='MESA 1' onClick={(e) => setTable(e.target.value)}>MESA 1</ButtonToggle>

                    <ButtonToggle value='Mesa 2' className='tableTwo' size='lg' type='button' name='MESA 2' onClick={(e) => setTable(e.target.value)}>MESA 2</ButtonToggle>

                    <ButtonToggle value='Mesa 3' className='tableThree' size='lg' type='button' name='MESA 3' onClick={(e) => setTable(e.target.value)}>MESA 3</ButtonToggle>

                    <ButtonToggle value='Mesa 4' className='tableFour' size='lg' type='button' name='MESA 4' onClick={(e) => setTable(e.target.value)}>MESA 4</ButtonToggle>
                </div>
                <p className='titleNameTable'>Cliente {name} {table}</p>
            </div>

      
    )
}

