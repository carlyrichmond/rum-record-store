import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import RecordListComponent from '../record-list-component/record-list-component';
import SearchBarComponent from '../search-bar-component/search-bar-component';

import './search-records-component.css';

export function SearchRecordsComponent(props) {
  const [ searchParams ]= useSearchParams();
  const [ query, setQuery ] = useState();

  useEffect(() => {
    if (searchParams) {
      const currentQuery = searchParams.get('terms');
      setQuery(currentQuery);
    }
  }, [searchParams])

  return (
    <div className="container">
      <div className="search-bar-container">
        <SearchBarComponent query={query}/>
      </div>
      <RecordListComponent query={query}/>
    </div>
  );
}
export default SearchRecordsComponent;
