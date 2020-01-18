import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>Hello, I am Andrew Dinh</h2>
      <p>
        I am a frontend React developer living in the beautiful Bay Area, California. <br/>
        Need a developer?  <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage;