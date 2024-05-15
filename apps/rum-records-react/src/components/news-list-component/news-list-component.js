import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './news-list-component.css';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

export function NewsListComponent(props) {
  return (
    <div className="container" style={{height: "100vh"}}>
      {
        <label data-testid='news-label' className="no-news-label"><FontAwesomeIcon icon={faWarning} />Unable to obtain news stories.</label> 
      }
    </div>
  );
}
export default NewsListComponent;
