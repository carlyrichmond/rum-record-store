/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

 const apm = require('elastic-apm-node').start({
    serviceName: 'record-store-server-node-js',
    serviceVersion: '1',
    serverUrl: 'https://e27b61b76ab2406a9da20520f384f88b.apm.eu-west-2.aws.cloud.es.io:443',
    secretToken: 'ELASTIC_APM_AUTH_TOKEN',
    environment: 'dev',
    opentelemetryBridgeEnabled: true
  });

 import * as express from 'express';
 import * as path from 'path';
 import * as cors from 'cors';
 
 import { environment } from './environments/environment';
 
 import { allRecords, filterRecords } from './records';
 
 const app = express();
 
 app.use('/assets', express.static(path.join(__dirname, 'assets')));
 
 const options = {
   origin: environment.allowedOrigin,
 };
 app.use(cors(options));
 
 app.get('/records', (req, res) => {
   res.send(allRecords);
 });
 
 app.get('/records/:terms', (req, res) => {
   const terms = req.params.terms;
   const records = terms ? filterRecords(terms) : allRecords;
 
   res.send(records);
 });
 
 const port = process.env.port || environment.defaultPort;
 const server = app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}/records`);
 });
 server.on('error', console.error);
 
 export default app;
 