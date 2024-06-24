import { styled } from "styled-components";

export const Container = styled.div`
  margin: 80px 10px 20px 10px;
  
  @media (max-width: 770px) {
    margin: 0;
  }
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-family: "Playwrite NZ", cursive;
  font-weight: 300;
  margin-top: 5px;
  font-size: 20px;
`;
