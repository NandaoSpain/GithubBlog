import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return(
    <SearchFormContainer>
      <div className="title">
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </div>
      <label htmlFor="busca">
        <input type="text" placeholder="Buscar conteúdo" id="busca" />
      </label>
    </SearchFormContainer>
  )
}