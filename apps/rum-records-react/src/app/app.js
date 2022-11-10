import { Link } from 'react-router-dom';

import { faMugSaucer, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { init as initApm } from '@elastic/apm-rum';
import { ApmRoute } from '@elastic/apm-rum-react';

import styles from './app.module.scss';
import { environment } from '../environments/environment';
import MainSplashComponent from './main-splash-component/main-splash-component';
import EventListComponent from './event-list-component/event-list-component';
import NewsListComponent from './news-list-component/news-list-component';
import SearchRecordsComponent from './search-records-component/search-records-component';

export function App() {

  initApm({
    serviceName: 'rum-records-react-ui',
    distributedTracingOrigins: ['http://localhost:3333'], // front to back instrumentation
    serverUrl: environment.elastic_deployment_url,
    serviceVersion: '1',
    environment: 'dev'
  });

  return (
    <>
      <header>
          <Link className={styles['company-header']} to="/">
            <h1 className={styles['app-header']} data-testid="company-header">
              RUM Records <FontAwesomeIcon icon={faRecordVinyl} />
            </h1>
          </Link>
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
            component={SearchRecordsComponent}            
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
