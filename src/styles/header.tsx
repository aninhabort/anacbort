import { styled } from "styled-components";

export const Container = styled.div`
  margin: 80px 10px 10px 8px;
  
  @media (max-width: 770px) {
    margin: 0;
  }
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  @media (max-width: 430px) {
    width: 140px;
    height: 140px;
  }
`;

export const Name = styled.p`
  font-family: "Playwrite NZ", cursive;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0;
  font-size: 20px;
`;

export const SubName = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
`;
