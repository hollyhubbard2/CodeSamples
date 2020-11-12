import React from 'react';
import "../styles/HeaderStyles.css";
import "../styles/fonts.css";

const HeaderNavComponent = () =>{
    return(
        <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="/">Mission</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">About</a></li>
        </ul>
    );


}

export default HeaderNavComponent;