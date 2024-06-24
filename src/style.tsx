import { styled } from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 44% 1fr;
  justify-items: center;
  gap: 8px;
  margin-top: 200px;

  @media (max-width: 1024px) {
    grid-template-columns: 40% 1fr;
  }

  @media (max-width: 770px) {
    display: grid;
    grid-template-columns: 1fr;

    align-items: center;
    justify-content: center;
    gap: 30px;

    width: auto;
    margin: 50px;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 10px;
  background-color: var(--bone);
  width: 600px;
  height: 400px;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;

  @media (max-width: 1024px) {
    width: fit-content;
    height: auto;
  }

  @media (max-width: 770px) {
    width: 500px;
    height: auto;
  }

  @media (max-width: 430px) {
    width: fit-content;
    height: auto;
  }
`;
