import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h3`
  letter-spacing: 2px;
  font-family: "Playwrite NZ", cursive;
`;

export const LinkText = styled.a`
  cursor: pointer;
  align-content: center;
  width: 500px;
  height: 46px;
  border-radius: 10px;
  background-color: var(--white);

  text-decoration: none;
  color: var(--brown);
  font-size: 16px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;

  &:hover {
    background-color: var(--brown);
    color: var(--white);
  }

  @media (max-width: 770px) {
    width: 400px;
  }

  @media (max-width: 430px) {
    width: 340px;
  }
`;
