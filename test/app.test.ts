import request from 'supertest';
import app from '../src/app';

describe('App', () => {
  it('should return a 200 status code and "Hello, World!" message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});