import { useState, createContext, useContext, ReactNode } from "react"

type SearchBarContextType = {
  children?: ReactNode
}

const SearchbarContext = createContext({
  searchQuery: "",
  //@ts-ignore
  setSearchQuery: (query: string) => { }
});
const useSearchBarContext = () => useContext(SearchbarContext);

const SearchBarProvider = ({ children }: SearchBarContextType) => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  return (
    <SearchbarContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchbarContext.Provider>
  )
}

export { SearchBarProvider, SearchbarContext, useSearchBarContext }
