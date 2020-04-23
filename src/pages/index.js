import React, { Fragment } from 'react';

import Button from '../components/Button';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';

import '../styles/index.css';

function IndexPage() {
  return (
    <Fragment>
      <SEO title="BabeKulin" />
      <Wrapper>
        <Profile />
        <Button
          text="Chat via Whatsapp"
          link="https://wa.me/628112778189?text=Halo%20%40babekulin.food!%20saya%20mau%20pesan.."
        />
        <Footer />
      </Wrapper>
    </Fragment>
  );
}

export default IndexPage;
