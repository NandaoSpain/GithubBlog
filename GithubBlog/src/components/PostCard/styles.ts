import styled from "styled-components"

export const PostCardContainer = styled.a`
  width: 416px;
  height: 260px;
  border-radius: 10px;
  background: ${(props) => props.theme["post"]};
  padding: 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.2s;
  
  div {
    display: flex;
    justify-content: space-between;

    h3 {
     color: ${(props) => props.theme["title"]};
     font-size: 16px;
     width: 70%;
      
    }

    span {
      color: ${(props) => props.theme["span"]};
      font-size: 14px;
      margin-left: 10px;
    }

  }

  
  p {
      color: ${(props) => props.theme["text"]};
      font-size: 14px;
      padding-top: 20px;
      
    }


  &:hover {
    background: ${(props) => props.theme["border"]};
  }
`


