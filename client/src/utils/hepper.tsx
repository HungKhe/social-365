import React from "react";
import { Route, Link } from "react-router-dom";

export const MenuLink = ({label, icon, to}: any) =>{
    return (
        <Route
            path={to} exact children={({match})=>{
            let active = match ? 'nav-item active' : 'nav-item';
            return (
                <li className={active}>
                    <Link to={to} className="nav-link">
                        {icon}
                        <span>{label}</span>
                    </Link>
                </li>
            )
            }}
        />
    )
}