import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I am Andrew Dinh</h2>
      <p>
        I am a frontend React developer living in the beautiful Bay Area, California. <br/>
        Need a developer?  <Link to="/contact">Contact me.</Link>
      </p>
      <Footer/>
    </div>
  )
}

export default AboutPage;