import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string()
})

type searchFormInputs = z.infer<typeof searchFormSchema>


// async function repoSearch(query: string) {
//   const url = `https://api.github.com/users/nandaospain/repos/`
//   const response = await api.get('/', {
//     params: {
//       q: query,
//     },
//   })
//   let filteredTransactions = response.data

//   if (query) {
//     filteredTransactions = filteredTransactions.filter(
//       (transaction: Transaction) =>
//         transaction.description.toLowerCase().includes(query.toLowerCase()),
//     )
//   }

//   filteredTransactions.sort(
//     (a: Transaction, b: Transaction) =>
//       new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
//   )
// }

export function SearchForm() {
  const {
    register,
    handleSubmit,
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  
  function handleSearch(data: searchFormInputs) {
    // repoSearch(data.query)
  }
  
  return(
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <div className="title">
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </div>
      <label htmlFor="busca">
        <input 
          type="text" 
          placeholder="Buscar conteúdo" 
          id="busca" 
          {...register('query')}
        />
      </label>
    </SearchFormContainer>
  )
}