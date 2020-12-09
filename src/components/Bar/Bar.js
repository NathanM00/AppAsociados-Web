import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Bar.css';

function Bar(props) {

    var active =false;

    if(props.title == props.current){
        active=true;
    }else{
        active=false;
    }

    function handleClick(){
        props.onClick(props.title);
    }

        return(
            <li onClick={handleClick} className={active ?  props.cName+"2": props.cName } >
                <Link to={props.path} >
                    <img src={active ? props.icon2 : props.icon} ></img>
                    <p  className={active ? 'nav-text2-p' : 'nav-text-p' }>{props.title}</p>
                </Link>
            </li>   
           )

}
export default Bar;