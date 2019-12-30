import React from 'react';
import { Link }  from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
  return (
    <header style={{
      // display: "flex",
      // flexDirection: "column",
      // backgroundColor: "deepskyblue",
      // alignContent: "center"
    }}>
      <h1 style={{
        // marginBottom: ".5rem",
        // marginLeft: "8px"
      }}>
        Trieu (Andrew) Dinh
      </h1>
      <nav style={{
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "flex-start",
        // width: "200px",
        // height: "35px",
        // marginLeft: "10px"
      }}>
        <Link className={headerStyles.link} to="/">Home</Link>
        <Link className={headerStyles.link} to="/about">About</Link>
        <Link className={headerStyles.link} to="/blog">Blog</Link>
        <Link className={headerStyles.link} to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header;