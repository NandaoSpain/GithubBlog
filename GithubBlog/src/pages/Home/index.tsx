import { useContext } from "react";
import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { RepoContext } from "../../contexts/repoContext";
import { HomeContainer, HomeContentContainer } from "./styles";


export function Home() {
  const { repoData, setRepoData } = useContext(RepoContext)
  console.log(repoData)
  return(
    <HomeContainer>
      <Header />
      <Profile />
          
      <SearchForm />
      <HomeContentContainer>
        {repoData.map((item) =>{
          return(
            <PostCard 
              title={item.title} 
              date={new Date(item.created_at).toLocaleDateString()} 
              content={item.body} 
            />
          )
          })}        
      </HomeContentContainer>
    </HomeContainer>
  )
}