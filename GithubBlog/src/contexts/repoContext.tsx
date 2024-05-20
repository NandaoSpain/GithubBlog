import axios from "axios";
import { createContext, useEffect, useState } from "react"

interface RepoProviderProps {
  children: React.ReactNode;
}

interface RepoData {
  id: number;
  title: string;
  created_at: string;
  body: string;
}

interface RepoContextType {
  repoData: RepoData[];
  setRepoData: React.Dispatch<React.SetStateAction<RepoData[]>>;
}

export const RepoContext = createContext<RepoContextType | undefined>(undefined)

export function RepoProvider({ children }: RepoProviderProps) {
  const [repoData, setRepoData] = useState<RepoData[]>([]);
  useEffect(() => {
    axios.get('https://api.github.com/repos/NandaoSpain/GithubBlog/issues')
     .then(response => {
        setRepoData(response.data)
      })
  }, [])
  return (
    <RepoContext.Provider value={{
      repoData,
      setRepoData
    }}>
      {children}
    </RepoContext.Provider>
  )
}