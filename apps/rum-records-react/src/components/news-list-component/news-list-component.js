import axios from 'axios';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { environment} from '../../environments/environment';

import './news-list-component.css';

export function NewsListComponent(props) {
  useEffect(() => {
    async function getNews() {
      try {
        let url = `${environment.baseUrl}/error/`;
        axios.get(url).then(res => {
          console.log(res);
      }).catch(errorRes => {
        console.log(errorRes.message);
      });
      }
      catch(err) {
        console.log('Unable to get news stories');
      }
    }
    getNews();
  });

  return (
    <div className="container" style={{height: "100vh"}}>
      {
        <label data-testid='news-label' className="no-news-label"><FontAwesomeIcon icon={faWarning} />Unable to obtain news stories.</label> 
      }
    </div>
  );
}
export default NewsListComponent;
