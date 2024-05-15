import { Link, Route, Outlet } from 'react-router-dom';

import { faMugSaucer, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { init as initApm } from '@elastic/apm-rum';
import { ApmRoutes } from '@elastic/apm-rum-react';

import './App.css';
import { environment } from './environments/environment';
import MainSplashComponent from './components/main-splash-component/main-splash-component';
import EventListComponent from './components/event-list-component/event-list-component';
import NewsListComponent from './components/news-list-component/news-list-component';
import SearchRecordsComponent from './components/search-records-component/search-records-component';

export function App() {
  initApm({
    serviceName: 'rum-records-react-ui',
    distributedTracingOrigins: ['http://localhost:3333'], // front to back instrumentation
    serverUrl: environment.elastic_deployment_url,
    serviceVersion: '1',
    environment: environment.production ? 'prod' : 'dev',
    // How to enable debug mode if needed
    // logLevel: 'debug'
  });

  return (
    <>
      <header>
        <Link className="company-header" to="/">
          <h1 className="app-header" data-testid="company-header">
            RUM Records <FontAwesomeIcon icon={faRecordVinyl} />
          </h1>
        </Link>
      </header>
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
      <section>
        <ApmRoutes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainSplashComponent />} />
            <Route path="/records" element={<SearchRecordsComponent />} />
            <Route path="/events" element={<EventListComponent />} />
            <Route path="/news" element={<NewsListComponent />} />
          </Route>
        </ApmRoutes>
      </section>
      <footer>
        Made by Carly Richmond with love and excessive amounts of tea
        <FontAwesomeIcon icon={faMugSaucer} />
      </footer>
    </>
  );
}

function Layout() {
  return (
    <Outlet />
  )
}

export default App;