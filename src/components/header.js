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
      <h1>Trieu (Andrew) Dinh</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* <div style={{
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
      </div> */}
    </header>
  )
}

export default Header;