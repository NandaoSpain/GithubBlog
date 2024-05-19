import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { HomeContainer, HomeContentContainer } from "./styles";

export function Home() {
  return(
    <HomeContainer>
      <Header />
      <Profile />
          
      <SearchForm />
      <HomeContentContainer>
        <PostCard 
          title={"JavaScript data types and data structures"} 
          date={"há 1 dia"} 
          content={"Programming languages all have built-in data structures,but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScrip"} 
        />
         <PostCard 
          title={"JavaScript data types and data structures"} 
          date={"há 1 dia"} 
          content={"Programming languages all have built-in data structures,but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScrip"} 
        />
         <PostCard 
          title={"JavaScript data types and data structures"} 
          date={"há 1 dia"} 
          content={"Programming languages all have built-in data structures,but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScrip"} 
        />
         <PostCard 
          title={"JavaScript data types and data structures"} 
          date={"há 1 dia"} 
          content={"Programming languages all have built-in data structures,but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScrip"} 
        />
        
      </HomeContentContainer>
    </HomeContainer>
  )
}