import { styled } from "styled-components";

export const Container = styled.div`
  --munsell: #1B9AAA;
  --black: #050505;

  display: flex;
  flex-flow: row;
  gap: 8px;
  margin-bottom: 20px;
  justify-content: center;

  .social-icons {
    color: var(--black);
  }

  :hover {
    color: var(--munsell);
  }
`;


