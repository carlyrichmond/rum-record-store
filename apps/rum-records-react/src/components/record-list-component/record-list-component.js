import axios from 'axios';
import { useEffect, useState } from 'react';

import { environment} from '../../environments/environment';
import RecordCardComponent from '../record-card-component/record-card-component';

import './record-list-component.css';

export function RecordListComponent({ query }) {

  const [ records, setRecords ] = useState();

  function enrichRecordsWithImages(records) {
    const baseImageURL = '/records';

    return records.map((record) => {
      const filename = `${baseImageURL}/${record.albumId}.avif`;
      return {...record, imagePath: filename}
    });
}

  useEffect(() => {
    async function getRecords() {
      try {
        let url = `${environment.baseUrl}/records/`;

        if (query) {
          url += `${query}`;
        }

        axios.get(url).then(res => {
          const enrichedRecords = enrichRecordsWithImages(res.data)
          setRecords(enrichedRecords);
      })
      }
      catch(err) {
        console.log(err)
        setRecords([]);
      }
    }
    getRecords();
  });

  return (
    <div className="cards-container">
      {
        records && records.length > 0 ?
        records.map((record, index) => 
        (<RecordCardComponent key={index} record={record}/>)
        )
        : <label className="no-records-label">No records found</label> 
      }
    </div>
  );
}
export default RecordListComponent;
