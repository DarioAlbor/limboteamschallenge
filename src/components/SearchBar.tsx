import React from 'react';
import './SearchBar.scss';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Buscar por título..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;