import * as React from 'react';
import { string } from 'prop-types';

import { styButton } from './styles';

function Button({ text, link, icon }) {
  return (
    <div css={styButton}>
      <a href={link} title={text} target="_blank" rel="noopener noreferrer">
        <button>{text}</button>
      </a>
    </div>
  );
}

Button.propTypes = {
  text: string.isRequired,
  link: string.isRequired,
  icon: string.isRequired,
};

export default Button;
