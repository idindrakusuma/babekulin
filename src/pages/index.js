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
          link="https://wa.me/628112778189?text=Hallo%2C%20%23BabeKulin%20food!%20%23eatBabe%20mau%20pesan%20nih....."
        />
        <Footer />
      </Wrapper>
    </Fragment>
  );
}

export default IndexPage;
