import Close from '@/icons/Close';
import React, { useCallback } from 'react';
import styles from './styles.module.css';

interface ISearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  productQuantity: number;
}

const SearchBar: React.FC<ISearchBarProps> = ({ searchQuery, setSearchQuery, productQuantity }) => {
  const onChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value),
    [setSearchQuery]
  );
  const onClickClear = useCallback(() => setSearchQuery(''), [setSearchQuery]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputContainer}>
        <input
          value={searchQuery}
          type="search"
          placeholder="Search for a smartphone..."
          className={styles.input}
          onChange={onChangeSearch}
        />
        {searchQuery.length > 0 && (
          <button type="button" onClick={onClickClear} className={styles.clearButton}>
            <Close />
          </button>
        )}
      </div>
      <span className={styles.message}>{productQuantity} RESULTS</span>
    </div>
  );
};

export default SearchBar;
