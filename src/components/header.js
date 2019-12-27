import React from 'react';
import { Link }  from 'gatsby';

const Header = () => {
  return (
    <header style={{
      backgroundColor: "deepskyblue"
    }}>
      <h1>The Great Gatsby Bootcamp</h1>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "200px",
        height: "35px"
      }}>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  )
}

export default Header;