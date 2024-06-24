import { styled } from "styled-components";

export const Container = styled.div`
  --munsell: #1B9AAA;
  --black: #050505;

  display: grid;
  grid-template-columns: 50px 50px 50px;

  align-items: center;
  justify-content: center;

  .social-icons {
    color: var(--black);
  }

  :hover {
    color: var(--munsell);
  }
`;


