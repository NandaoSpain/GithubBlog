import { useContext } from "react";
import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { RepoContext } from "../../contexts/repoContext";
import { HomeContainer, HomeContentContainer } from "./styles";

interface ItemProps {
  title: string;
  created_at: string;
  body: string;
  id: number;
}

export function Home() {
  const repoContext = useContext(RepoContext)

  if (!repoContext) {
    return <div>Loading...</div>
  }
  const { repoData } = repoContext;
  return(

    <HomeContainer>
      <Header />
      <Profile />
          
      <SearchForm />
      <HomeContentContainer>
        {repoData.map((item: ItemProps) =>{
          return(
            <PostCard
              key={item.id} 
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