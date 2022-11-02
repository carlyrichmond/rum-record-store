import app from './main';
import * as request from 'supertest';

//--forceExit --detectOpenHandles  --watchAll --maxWorkers=1
describe('GET /records', () => {
    const testRequest = request(app);
    it('returns all records', async () => {
        // Character count of all records
        const expectedContentLength = '1747';

        await testRequest.get('/records')
        .expect('Content-Type', /json/)
        .expect('Content-Length', expectedContentLength)
        .expect(200)
        .then((response) => {                          
            expect(response.body).toBeDefined();
          });
    });

    it('returns filtered records', async () => {
        // Character count of filtered records
        const expectedContentLength = '197';

        await testRequest.get('/records/beat')
        .expect('Content-Type', /json/)
        .expect('Content-Length', expectedContentLength)
        .expect(200)
        .then((response) => {                          
            expect(response.body).toBeDefined();
          });
    });
  });