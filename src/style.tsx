import { styled } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  gap: 15%;

  @media (max-width: 770px) {
    flex-flow: column wrap;
    width: auto;
    margin: 50px 10px;
  }
`;

export const Container = styled.div`
  background-color: var(--bone);
  width: fit-content;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 770px) {
    align-items: center;
    justify-content: space-around;
  }
`;
