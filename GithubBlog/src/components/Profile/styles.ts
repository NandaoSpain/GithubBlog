import styled from "styled-components"

export const ProfileContainer = styled.div`
  width: 864px;
  height: 212px;
  background: ${(props) => props.theme.profile};
  margin: -80px auto;
  border-radius: 10px;
 
  flex: 1;
`

export const ProfileContentContainer = styled.div`
  padding: 30px;
  display: flex;
  gap: 30px;

  p {
      font-size: 16px;
      font-weight: 100;
      color: ${(props) => props.theme["subtitle"]};
      padding: 20px 0;
    }

  footer {
    display: flex;
    gap: 30px;
    align-items: center;
    color: ${(props) => props.theme["label"]};

    span {
      color: ${(props) => props.theme["subtitle"]};

      &:before {
        content: " ";
      }
    }
    
  }
  .avatar {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    opacity: 0.8;
  }
  
  .title {
    color: ${(props) => props.theme.white};
    display: flex; 
    justify-content: space-between;
    align-items: center;

    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
    }

    strong {
      font-size: 24px;
      font-weight: 400;
      color: ${(props) => props.theme["title"]};
    }

  }
`
