import { useContext } from "react";
import { PostCardContainer } from "./styles";
import { RepoContext } from "../../contexts/repoContext";

interface PostCardProps {
  title: string;
  date: string;
  content: string;
  url?: string;
}

export function PostCard({ title, date, content, url }: PostCardProps) {
  const { issuesRender } = useContext(RepoContext)
  console.log(issuesRender)
  return(
    <PostCardContainer>
      <a href={url}>
        <div>
          <h3>{title}</h3> 
          <span>{date}</span>
        </div>
        <p>{content}</p>
      </a>
    </PostCardContainer>
  )
}