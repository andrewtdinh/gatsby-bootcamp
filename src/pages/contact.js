import React from 'react';
import Layout from '../components/layout'
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact me" />
      <h2>Contact Me</h2>
      <p>
        You can contact me on 
        <span> <a href="https://www.linkedin.com/in/andrewtdinh/" target="_blank">LinkedIn</a></span>
      </p>
    </Layout>
  )
}

export default ContactPage;