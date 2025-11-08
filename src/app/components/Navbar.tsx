"use client";
import React, { useState } from "react";
import "./header.css";
import { navs } from "../data/data";

export default function Navbar() {
  const [navList, setNavList] = useState(navs);

  return (
    <nav id="navbar" className="navbar nav-menu">
      <ul>
        {navList.map((nav) => (
          <li>
            <a
              href=""
              className={`nav-link scrollto ${
                nav.active ? "active" : undefined
              }`}
            >
              <i className={nav.icon}>
                <span>{nav.name}</span>
              </i>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
