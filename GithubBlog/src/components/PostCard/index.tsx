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
          <h3 className="card-title">{title}</h3> 
          <span>{date}</span>
        </div>
        <p className="card-content">{content}</p>
      </a>
    </PostCardContainer>
  )
}