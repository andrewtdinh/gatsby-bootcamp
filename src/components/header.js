import React from 'react';
import { Link }  from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
  return (
    <header 
      className={headerStyles.header}
      style={{
      // display: "flex",
      // flexDirection: "column",
      // backgroundColor: "deepskyblue",
      // alignContent: "center"
    }}>
      <h1 style={{
        // marginBottom: ".5rem",
        // marginLeft: "8px"
      }}>
        <Link to="/" className={headerStyles.title}>
          Trieu (Andrew) Dinh
        </Link>
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
        <ul>
          <li>
            <Link className={headerStyles.link} to="/">Home</Link>
          </li>
          <li>
            <Link className={headerStyles.link} to="/about">About</Link>
          </li>
          <li>
            <Link className={headerStyles.link} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={headerStyles.link} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;