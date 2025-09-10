import { styled } from "styled-components";

export const HeaderImg = styled.img`
  width: 100%;
  height: 300px;
  top: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  position: absolute;

  @media (max-width: 770px) {
    height: 200px;
  }

  @media (max-width: 430px) {
    height: 180px;
  }
`;

export const MainContainer = styled.div`
  display: grid;
  justify-items: center;
  position: relative;
  margin-top: 100px;

  align-items: center;
  justify-content: center;

  @media (max-width: 770px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
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
  width: auto;

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
