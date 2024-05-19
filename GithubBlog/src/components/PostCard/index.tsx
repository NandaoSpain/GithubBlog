import { PostCardContainer } from "./styles";

interface PostCardProps {
  title: string;
  date: string;
  content: string;
  url?: string;
}

export function PostCard({ title, date, content, url }: PostCardProps) {
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