'use client'
import React, { useState } from "react";
import "./navbar.css";
import { navs } from "~/data/data";

export default function Navbar() {
  const [navList, setNavList] = useState(navs)

  const handleScrollTo = (section: string) => { }

  return (
    <nav id="navbar" className="navbar nav-menu">
      <ul>
        {navList.map(nav => (
          <li key={nav.id}>
            <a onClick={() => handleScrollTo(nav.target)}
              className={`nav-link scrollto ${nav.active ? 'active' : undefined}`}
            >
              <i className={nav.icon}></i> <span>{nav.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
