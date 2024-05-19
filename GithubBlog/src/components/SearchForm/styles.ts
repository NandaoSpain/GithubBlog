import styled from "styled-components"

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 864px;
  margin: 0 auto;
  margin-top: 150px;


  .title {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme["title"]};
    
    h4 {
      padding-bottom: 20px;
    }

    span {
      color: ${(props) => props.theme["span"]};
    }
  }

  input {
    width: 864px;
    height: 48px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["border"]};
    padding-left: 16px;
    font-size: 16px;
    color: ${(props) => props.theme["text"]};
    margin-bottom: 16px;
    outline: none;
    background-color: ${(props) => props.theme["background"]};

    &::placeholder {
      color: ${(props) => props.theme["text"]};
    }
  }
`