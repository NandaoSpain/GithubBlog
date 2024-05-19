import { PostCardContainer } from "./styles";

interface PostCardProps {
  title: string;
  date: string;
  content: string;
}

export function PostCard({ title, date, content }: PostCardProps) {
  return(
    <PostCardContainer>
      <div>
        <h3>{title}</h3> 
        <span>{date}</span>
      </div>
      <p>{content}</p>
    </PostCardContainer>
  )
}