import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import logo from '../../resources/navLogo.svg';
import Bar from '../Bar/Bar';
import User from '../User/User';

function NavBar(props) {

    const [ page, setPage] = React.useState('Vista General');

    function handleChange(pagina){
        setPage(pagina);
    }

    return ( 
        
        <IconContext.Provider value={{ color: '#fff' }}>
             <nav  className='nav-menu'> 

             <img src={logo} className='nav-logo' alt=''></img>

                <ul className='nav-menu-items' > 
                    {SidebarData.map((item, index) =>{
                        return(
                         <Bar onClick= {handleChange} key={index} current={page}
                         path={item.path} cName={item.cName} title={item.title} icon={item.icon} icon2={item.icon2} />                         
                        )
                    })}
                </ul>
                <User/>
             </nav>
        </IconContext.Provider>
     
    );
}

export default NavBar;