import * as React from 'react';
import { node } from 'prop-types';

function Wrapper({ children }) {
  return <div>{children}</div>;
}

Wrapper.propTypes = {
  children: node.isRequired,
};

export default Wrapper;
