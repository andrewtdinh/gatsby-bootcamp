import React from 'react';
import Footer from '../components/footer'
import Header from '../components/header';

const ContactPage = () => {
  return (
    <div>
      <Header/>
      <h2>Contact Me</h2>
      <p>
        You can contact me on 
        <span> <a href="https://www.linkedin.com/in/andrewtdinh/" target="_blank">LinkedIn</a></span>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage;