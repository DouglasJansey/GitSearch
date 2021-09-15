import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 15px;
  height: 80px;

  

  h1 {
    font-size: 25px;
    font-weight: bold;
    margin: 5px;
    
  }

  h3 {
    font-size: 15px;
    font-weight: bold;
    margin: 5px;
  }

  h4 {
    font-size: 14px;
    font-weight: bold;
    margin: 5px;
  }
`;




export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin:15px;
`;
