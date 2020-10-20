import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Bar.css';

function Bar(props) {

    function handleClick(){
        props.onClick(props.path);
    }

        return(
            <li onClick={handleClick} className={props.active ?  props.cName+"2": props.cName } >
                <Link to={props.path} >
                    <img src={props.active ? props.icon2 : props.icon} ></img>
                    <p  className={props.active ? 'nav-text2-p' : 'nav-text-p' }>{props.title}</p>
                </Link>
            </li>   
           )

}
export default Bar;