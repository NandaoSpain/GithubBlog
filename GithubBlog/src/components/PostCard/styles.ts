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

    .card-title {
      color: ${(props) => props.theme["title"]};
      font-size: 16px;
      width: 70%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      
    }

    span {
      color: ${(props) => props.theme["span"]};
      font-size: 14px;
      margin-left: 10px;
    }

  }

  
  .card-content {
      color: ${(props) => props.theme["text"]};
      font-size: 14px;
      padding-top: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 6; 
      -webkit-box-orient: vertical;
      overflow: hidden;
      
    }


  &:hover {
    background: ${(props) => props.theme["border"]};
  }
`


