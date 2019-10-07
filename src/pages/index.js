import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';

var settings = {
  images: [
    { url: require('../assets/images/option1.jpg'), position: 'center' },
    { url: require('../assets/images/positve.jpg'), position: 'center' }
  ],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>
    <SEO />
    <Header />
    <EmailForm />
    <Footer />
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;
