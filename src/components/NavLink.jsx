"use client"

import Link from 'next/link';
import React from 'react';

const NavLink = ({href, name, pathname}) => {
    return (
        <Link className={`p-4 hover:bg-gray-700 hover:text-white ${pathname == pathname && "bg-gray-700 text-white"}`} href={href}>{name}</Link>
    );
};

export default NavLink;