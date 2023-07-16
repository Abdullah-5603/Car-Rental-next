"use client"

import Link from 'next/link';
import React from 'react';

const NavLink = ({href, children, pathName, currentPath, className}) => {
    return (
        <Link className={`p-4 hover:bg-gray-700 hover:text-white ${pathName == currentPath && "bg-gray-700 text-white"} ${className}`} href={href}>{children}</Link>
    );
};

export default NavLink;