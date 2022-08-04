import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecordListComponent from '../record-list-component/record-list-component';
import SearchBarComponent from '../search-bar-component/search-bar-component';

import styles from './search-records-component.module.scss';

function useQuery() {
  const { search } = useLocation();
  const params = new URLSearchParams(search)

  return params.get('terms');
}

export function SearchRecordsComponent(props) {
  const [query] = useState(useQuery());

  return (
    <div className={styles['container']}>
      <div className={styles['search-bar-container']}>
        <SearchBarComponent query={query}/>
      </div>
      <RecordListComponent query={query}/>
    </div>
  );
}
export default SearchRecordsComponent;
