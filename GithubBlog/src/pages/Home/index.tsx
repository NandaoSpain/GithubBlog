import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { HomeContainer, HomeContentContainer } from "./styles";

export function Home() {
  return(
    <HomeContainer>
      <Header />
      <Profile />
      <HomeContentContainer>
        <h2>Publicações</h2>
        // criar outro componente para as publicacoes e o input na pasta components
      </HomeContentContainer>
    </HomeContainer>
  )
}