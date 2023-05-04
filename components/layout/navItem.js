import React from "react";
import {useRouter} from 'next/router';
import propTypes from "prop-types";

const NavItem = ({}) =>{
    const render = useRouter();
    return <>{Router.pathname === "/" ? item :""}</>;
}

export default NavItem;

NavItem.propTypes={
    item:propTypes.string
}