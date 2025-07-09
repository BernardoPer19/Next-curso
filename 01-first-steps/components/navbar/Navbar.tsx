import Link from "next/link";
import React from "react";

const navItems = [
  { path: "/about", Text: "About" },
  { path: "/price", Text: "Price" },
  { path: "/contact", Text: "Contact" },
];

async function Navbar() {
  return (
    <nav className="flex bg-blue-600 p-2 m-2 rounded-2xl">
      <span>Home</span>
      {navItems.map((item, index) => (
        <Link key={index} href={`/${item.path}`}>
          <span className="m-2">`{item.Text}`</span>
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
