/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

 import express from 'express';
 import * as path from 'path';
 import cors from 'cors';

import { allRecords, filterRecords } from './util/records.js';
 
 const app = express();
 
 app.use('/assets', express.static(path.join('./', 'assets')));
 app.use('/util', express.static(path.join('./', 'util')));
 
 const options = {
   origin: 'http://localhost:3000',
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
 
 const port = process.env.port || 3333;
 const server = app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}/records`);
 });
 server.on('error', console.error);
 
 export default app;
 