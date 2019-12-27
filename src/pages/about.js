import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer'
import Header from '../components/header';

const AboutPage = () => {
  return (
    <div>
      <Header/>
      <h2>Hello, I am Andrew Dinh</h2>
      <p>
        I am a frontend React developer living in the beautiful Bay Area, California. <br/>
        Need a developer?  <Link to="/contact">Contact me.</Link>
      </p>
      <Footer/>
    </div>
  )
}

export default AboutPage;