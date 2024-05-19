import { ArrowUpRight, GithubLogo, Building, Users } from "@phosphor-icons/react"
import { ProfileContainer, ProfileContentContainer } from "./styles";



export function Profile() {
  const url = "https://github.com/nandaospain.png"
  return(
    <ProfileContainer>
      <ProfileContentContainer>
        <img src={url} alt="" className="avatar"/>
        <div>
          <div className="title">
            <strong>Fernando Rodrigues</strong>
            <a href="https://github.com/nandaospain" target="_blank" rel="noreferrer">
              Github
              <ArrowUpRight />
            </a>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            saepe deleniti reiciendis distinctio quaerat sunt.</p>
          <footer>
            <div>
              <GithubLogo />
              <span>nandaospain</span>
            </div>
            <div>
              <Building />
              <span>Microsoft</span>
            </div>
            <div>
              <Users />
              <span>17.328 seguidores</span>
            </div>
          </footer>
        </div>
      </ProfileContentContainer>
    </ProfileContainer>
  )
}