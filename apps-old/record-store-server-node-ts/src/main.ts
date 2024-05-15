/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import 'elastic-apm-node/start';

import express from 'express';
import path from 'path';
import cors from 'cors';

import { environment } from './environments/environment';

import { allRecords, filterRecords } from './records';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const options: cors.CorsOptions = {
  origin: environment.allowedOrigin,
};
app.use(cors(options));

app.get('/records', (req, res) => {
  res.send(allRecords);
});

app.get('/records/:terms', (req, res) => {
  const terms: string = req.params.terms;
  const records = terms ? filterRecords(terms) : allRecords;

  res.send(records);
});

const port = process.env.port || environment.defaultPort;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/records`);
});
server.on('error', console.error);

export default app;
