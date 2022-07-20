import { Route, Routes, Link } from 'react-router-dom';

//import { ApmRoutes, ApmRoute } from '@elastic/apm-rum-react'

import { faMugSaucer, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { init as initApm } from '@elastic/apm-rum';

import './app.module.scss';

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
        <h1>RUM Records <FontAwesomeIcon icon={faRecordVinyl} /></h1>
      </header>
      <br />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/records">Records</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <br />
      <section>
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-splash">
                This is the main generated root route.{' '}
                <Link to="/records">Click here for page 2.</Link>
              </div>
            }
          />
          <Route
            path="/records"
            element={
              <div>
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            }
          />
          <Route
            path="/events"
            element={
              <div>
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            }
          />
        </Routes>
      </section>
      <footer>
        Made by Carly Richmond with love and excessive amounts of tea
        <FontAwesomeIcon icon={faMugSaucer} />
      </footer>
    </>
  );
}
export default App;
