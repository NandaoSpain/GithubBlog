import { createContext } from "react";
import { api } from '../lib/axios'

interface RepoProviderProps {
  children: React.ReactNode;
}

export const RepoContext = createContext({})

export function RepoProvider({ children }: RepoProviderProps) {

  async function issuesRender () {
    await response = api.get('https://api.github.com/search/issues')
    console.log(response)    

  }


  return (
    <RepoContext.Provider value={{
      issuesRender,
    }}>
      {children}
    </RepoContext.Provider>
  )
}