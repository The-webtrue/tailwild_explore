import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const  routes = [
        {id: 1, name: "Home", Path:"/home"},
        {id: 2, name: "Produts", Path:"/product"},
        {id: 3, name: "Orders", Path:"/orders"},
        {id: 4, name: "About", Path:"/about"}
    ]
    return (
        <nav className='bg-purple-600'>
            
            <div  onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden ">
            {open ? <XMarkIcon /> : <Bars3Icon/> }
             
            </div>
            
            <ul className={`md:flex justify-center absolute duration-500 ease-in md:static bg-purple-600 w-full text-center ${open ? 'top-6' : 'top-[-120px]'}`}>
               {
                routes.map(route => <Link 
                    key={route.id}
                    route={route}></Link>)
               }
            </ul>
        </nav>
    );
};

export default Navbar;