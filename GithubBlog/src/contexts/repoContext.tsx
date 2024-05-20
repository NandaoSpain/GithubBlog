import axios from "axios";
import { createContext, useEffect, useState } from "react"

interface RepoProviderProps {
  children: React.ReactNode;
}



export const RepoContext = createContext({})

export function RepoProvider({ children }: RepoProviderProps) {
  const [repoData, setRepoData] = useState([])
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