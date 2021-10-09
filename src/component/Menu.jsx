import React from 'react';
import data from './data/data.json';


const Menu = () => {

    return (
        <div>
            <ul>
                {
                    data.map(item => (

                        <div className='grid' key={item.id}>                           
                            <input name="submit" className='imgMenuOne' type="image" src={item.img} alt="menu"/>

                        </div>

                    ))


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
