import { styled } from "styled-components";

export const HeaderImg = styled.img`
  width: 100%;
  height: 300px;
  top: 0;
  left: 0;
  object-fit: cover;
  position: absolute;
`;

export const MainContainer = styled.div`
  display: grid;
  /* grid-template-columns: 44% 1fr; */
  justify-items: center;
  position: relative;
  margin-top: 100px;

  /* @media (max-width: 1024px) {
    grid-template-columns: 40% 1fr;
  } */

  @media (max-width: 770px) {
    display: grid;
    grid-template-columns: 1fr;

    gap: 30px;

    width: auto;
    margin: 50px;
  }

  @media (max-width: 430px) {
    gap: 8px;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 10px;
  padding: 4px 8px;
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
    width: 340px;
    height: auto;
  }
`;
