import React from "react";

const Header = (props) => (

    <div className="container">
        <div className="center-align">
            <h2><b>Login</b></h2>
            <p>{props.providedLink}</p>
        </div>
    </div>  
);

export default Header;