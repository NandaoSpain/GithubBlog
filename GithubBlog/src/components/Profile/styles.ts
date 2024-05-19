import styled from "styled-components"

export const ProfileContainer = styled.div`
  flex: 1;
  width: 864px;
  height: 212px;
  background: ${(props) => props.theme.profile};
  margin: -80px auto;
  border-radius: 10px;
`

export const ProfileContentContainer = styled.div`
  padding: 30px;

  .avatar {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    opacity: 0.8;
  }

  div {
    color: ${(props) => props.theme.white};
  }
`
