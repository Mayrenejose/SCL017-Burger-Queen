import React,{useState} from 'react';
import { Helmet } from "react-helmet";
import TableName from './TableName';
import ButtonsMenu from './ButtonsMenu';
import BackArrow from './BackArrow';
import Menu from './Menu';


const Garzon = ({compra: purchase, setCompra, total}) => {
    const [name, setName] = useState('');
    const [table, setTable] = useState('');
   
    return (
        <React.Fragment>
            <Helmet>
                <style>{'body { background-color: #FACE7F; }'}</style>
            </Helmet>
            <TableName name= {name} setName={setName} table={table} setTable={setTable} />
            <Menu 
            name= {name} 
            table= {table}
            compra={purchase}
            setCompra={setCompra}
            total={total}

            />
            <ButtonsMenu />             
           <BackArrow />             
        </React.Fragment>

    )

}

export default Garzon

