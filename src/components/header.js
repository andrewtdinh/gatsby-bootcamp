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
      <h1 style={{
        marginBottom: ".5rem",
        marginLeft: "8px"
      }}>
        Trieu (Andrew) Dinh
      </h1>
      <nav style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "200px",
        height: "35px",
        marginLeft: "10px"
      }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header;