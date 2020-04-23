import * as React from 'react';
import { styWrapper } from './styles';

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div css={styWrapper}>
      <span dangerouslySetInnerHTML={{ __html: `&copy; BabeKulin ${date}` }} />
    </div>
  );
}

export default Footer;
