import { useEffect, useState } from 'react';
import RecordCardComponent from '../record-card-component/record-card-component';
import styles from './record-list-component.module.scss';
import { getAllRecords } from './records';

export function RecordListComponent({ query }) {

  const [ records, setRecords ] = useState();

  const getRecords = () => {
    const allRecords = getAllRecords();
    let filteredRecords = allRecords;
    
    if (query){
      filteredRecords = allRecords.filter((record) => {
        return record.title.toLowerCase().search(query) > -1 || record.artist.toLowerCase().search(query) > -1;
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
