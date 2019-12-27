import React from 'react';
import { Link }  from 'gatsby';

const Header = () => {
  return (
    <header style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "deepskyblue",
      alignContent: "center"
    }}>
      <h1>The Great Gatsby Bootcamp</h1>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
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