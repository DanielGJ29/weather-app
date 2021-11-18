import React from 'react';
import Home from '../Pages/Home/Home';
import "./Layout.Style.css";
const Layout = ({children}) => {
    return (
        <div className="main-layout h-screen">
            <Home/>
            {children}
        </div>
    );
};

export default Layout;