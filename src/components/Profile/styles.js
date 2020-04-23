import { css } from '@emotion/core';

export const styWrapper = css`
  margin-top: 24px;

  h3 {
    margin: 12px auto;
    text-align: center;
  }

  p {
    text-align: center;
  }
`;

export const styProfile = css`
  position: relative;
  width: 96px;
  height: 96px;
  display: block;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 auto 10px;
  border-radius: 50%;
  overflow: hidden;
  padding: 4px;

  img {
    width: 0;
    min-width: 96px;
    min-height: 96px;
  }
`;
