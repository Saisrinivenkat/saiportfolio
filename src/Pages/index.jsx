import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

import Head from '../components/Title/title';
import About from '../components/About/about';
import Projects from '../components/Projects/projects';
import Contact from '../components/Contact/contact';
import Footer from '../components/Footer/footer';




function Profile() {
  useEffect(() => {  
    Aos.init({ duration: "1500" })
   }, [])
  return (
    <>
      <Head />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Profile;
