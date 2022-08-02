import { Link } from 'react-router-dom';

import { faMugSaucer, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { init as initApm } from '@elastic/apm-rum';
import { ApmRoute } from '@elastic/apm-rum-react';

import styles from './app.module.scss';
import MainSplashComponent from './main-splash-component/main-splash-component';
import RecordListComponent from './record-list-component/record-list-component';
import EventListComponent from './event-list-component/event-list-component';
import NewsListComponent from './news-list-component/news-list-component';

export function App() {

  const apm = initApm({
    serviceName: 'rum-records-react-ui',
    serverUrl: 'https://e27b61b76ab2406a9da20520f384f88b.apm.eu-west-2.aws.cloud.es.io:443',
    serviceVersion: '1',
    environment: 'dev'
  });

  return (
    <>
      <header>
        <h1 className={styles['app-header']}>
          <Link className={styles['company-header']} to="/">RUM Records</Link>
          <FontAwesomeIcon icon={faRecordVinyl} />
        </h1>
      </header>
      <br />
      <nav>
        <ul className="nav-bar">
          <li>
            <Link to="/records">Records</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <section>
          <ApmRoute
            path="/"
            exact
            component={MainSplashComponent}
          />
          <ApmRoute
            path="/records"
            component={RecordListComponent}            
          />
          <ApmRoute
            path="/events"
            component={EventListComponent}
          />
          <ApmRoute
            path="/news"
            component={NewsListComponent}
          />
      </section>
      <footer>
        Made by Carly Richmond with love and excessive amounts of tea
        <FontAwesomeIcon icon={faMugSaucer} />
      </footer>
    </>
  );
}
export default App;
