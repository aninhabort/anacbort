import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
`;

export const Text = styled.h3`
  letter-spacing: 2px;
  font-family: "Playwrite NZ", cursive;
`;

export const LinkText = styled.a`
  text-decoration: none;
  color: var(--brown);
  font-size: 16px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  
  cursor: pointer;
  display: flex;
  flex-flow: row;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 46px;
  border-radius: 10px;
  background-color: var(--white);
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    background-color: var(--brown);
    color: var(--white);
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;
