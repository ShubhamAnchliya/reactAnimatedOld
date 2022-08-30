import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
             <h1> 404 Error Page</h1>
             <h4> Page doesn't exist </h4>
             <NavLink to="/" > Go to Home Page</NavLink>
            
        </>
    );
   
};

export default Error;