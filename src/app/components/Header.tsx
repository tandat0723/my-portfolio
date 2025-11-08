"use client";
import "./header.css";
import Navbar from "~/components/Navbar";

export default function Header() {
  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <Navbar />
    </header>
  );
}
