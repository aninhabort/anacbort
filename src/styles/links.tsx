import { styled } from "styled-components";

export const Container = styled.div`
  --munsell: #1B9AAA;
  --black: #050505;
  --white: #ffff;

  display: flex;
  flex-flow: column;
  gap: 8px;
`;

export const LinkText = styled.button`
  width: 450px;
  height: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  color: var(--black);

  @media (max-width: 770px) {
    width: 350px;
  }
`;

export const Link = styled.a`
  text-decoration: none;

  :hover {
    background-color: var(--munsell);
    color: var(--white);
    font-weight: 400;
  }
`;
