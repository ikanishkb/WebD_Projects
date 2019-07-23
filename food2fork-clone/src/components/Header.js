import React from 'react'

export default function Header(props) {
    console.log(props);
    return (
        <header>
            <div className="container-fluid">
                <div className="row align-items-center" style={props.styleClass}>
                <div className="col text-center">
                    <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted">
                        {props.title}
                    </h1>
                    {props.children}
                </div>
                </div>
            </div>
        </header>
    )
}
