import React from 'react';
import data from './data/data.json';


const Menu = () => {

    return (
        <div>
            <ul>                
                {  
                data.map(item => (

                    <div>
                        {/* <button key={item.id}> {item.img}</button> */}
                            {/* <img src={item.img} alt="menu" />    */}      
                            {item.img}
                    </div>

                  

                ))

                    /* data.filter(data => data.length >=6)  */                                                                   
                      

                    
                }                

            </ul>

        </div>

    )

}

export default Menu;

/* data.map(item => (

                        <div key={item.id}>
                            <button> 
                                <img src={item.img} alt="menu" />         
                            </button>
                        </div>

                      

                    ))*/
