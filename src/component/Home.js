import React from "react";
import { useLocation } from "react-router-dom";


export default function Hello() {
    let location = useLocation();

    return (
        <div className="hello-container">
            <h1 className="hello-heading">Hello {location.state.id} and welcome</h1>
        </div>
    );
}
