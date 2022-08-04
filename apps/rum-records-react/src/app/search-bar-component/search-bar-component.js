import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

import styles from './search-bar-component.module.scss';

export function SearchBarComponent(props) {

  const history = useHistory();

  function searchRecords(event) {
    if (event?.key === 'Enter') {
      const queryTerms = event.currentTarget.value.toLowerCase();
      history.push(`/records?terms=${queryTerms}`);
      window.location.reload();
    }
  }

  return (
    <div className={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch} />
        <input defaultValue={props.query} type="search" placeholder="Browse our record selection today!" 
        aria-label="Search record selection" onKeyUp={searchRecords}></input>
      </div>
  );
}
export default SearchBarComponent;
