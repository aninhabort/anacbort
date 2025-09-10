import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;

  align-items: center;
  justify-content: center;

  .social-icons {
    color: var(--white);
  }

  .social-icons:hover {
    color: var(--brown);
  }
`;


