import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecordCardComponent from '../record-card-component/record-card-component';
import styles from './record-list-component.module.scss';
import { getAllRecords } from './records';

  // Custom hook to get query params
  function useQueryParams() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    
    return params.get('terms');
  }

export function RecordListComponent(props) {

  const [ queryTerms ] = useState(useQueryParams());
  const [ records, setRecords ] = useState();

  const getRecords = () => {
    const allRecords = getAllRecords();
    let filteredRecords = allRecords;
    
    if (queryTerms){
      filteredRecords = allRecords.filter((record) => {
        return record.title.toLowerCase().search(queryTerms) > -1 || record.artist.toLowerCase().search(queryTerms) > -1;
      });
    }

    setRecords(filteredRecords);
  }

  useEffect(() => {
    setRecords(getRecords);
  }, []);

  return (
    <div className={styles['container']}>
      {
        records && records.length > 0 ?
        records.map((record, index) => 
        (<RecordCardComponent key={index} record={record}/>)
        )
        : <label className={styles['no-records-label']}>No records found</label> 
      }
    </div>
  );
}
export default RecordListComponent;
