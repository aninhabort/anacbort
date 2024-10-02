import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px;

  align-items: center;
  justify-content: center;

  .social-icons {
    color: var(--white);
  }

  .social-icons:hover {
    color: var(--brown);
  }
`;


