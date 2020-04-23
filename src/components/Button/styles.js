import { css } from '@emotion/core';

export const styButton = css`
  margin: 4px auto;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  button {
    font-weight: 600;
    color: #000;
    border-color: #e80c0c;
    border: solid 1px;

    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

    &:hover {
      background-color: #fff;
    }
  }
`;
