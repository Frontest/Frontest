import { createContext, useContext, useState } from "react";

export const SearchContext = createContext({
  setSearchValue: () => {},
  searchValue: "",
});

export const SearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
