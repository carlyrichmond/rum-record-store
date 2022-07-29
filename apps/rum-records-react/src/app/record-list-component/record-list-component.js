import { useEffect, useState } from 'react';
import RecordCardComponent from '../record-card-component/record-card-component';
import styles from './record-list-component.module.scss';
import { getRecords } from './records';

export function RecordListComponent(props) {

  const [recordsData, setRecordsData] = useState();

  useEffect(() => {
    setRecordsData(getRecords());
  }, []);

  return (
    <div className={styles['container']} style={{height: "100%"}}>
      {
        recordsData && recordsData.length > 0 ?
        recordsData.map((record, index) => 
        (<RecordCardComponent key={index} record={record}/>)
        )
        : <label className={styles['no-records-label']}>No records found</label> 
      }
    </div>
  );
}
export default RecordListComponent;
