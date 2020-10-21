import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import logo from '../../resources/navLogo.svg';
import Bar from '../Bar/Bar';

function NavBar(props) {

    const [active, setActive] = React.useState(false);
    const [ page, setPage] = React.useState(true);


    function handleChange(cambio){

        /*
        if(page === cambio){
            console.log(cambio);
            console.log(page);
            setActive(true);
        } else if(page !== cambio){
            setPage (cambio);
            console.log(cambio);
            console.log(page);
            setActive(false);
        }*/
    }

    return ( 
        
        <IconContext.Provider value={{ color: '#fff' }}>
             <nav  className='nav-menu'> 

             <img src={logo} className='nav-logo' alt=''></img>

                <ul className='nav-menu-items' > 
                    {SidebarData.map((item, index) =>{
                        return(
                         <Bar onClick= {handleChange} key={index}  active={item.estate}
                         path={item.path} cName={item.cName} title={item.title} icon={item.icon} icon2={item.icon2} />                         
                        )
                    })}
                </ul>
             </nav>
        </IconContext.Provider>
     
    );
}

export default NavBar;