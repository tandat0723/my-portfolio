import React from 'react'
import NavLink from './NavLink'

const MenuOverPlay = ({ link }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {link.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul> 
    )
}

export default MenuOverPlay