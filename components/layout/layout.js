import React from "react";
import Header from './header';


const Footer =() =>{
    return <h3>This is Footer</h3>;
}

const Layout =({children}) =>{
    return (<><Header/>{children}<Footer/></>)
}
export default Layout;