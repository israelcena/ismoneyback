import request from 'supertest';
import app from '../../app';
import { Todos } from './todo.model';

beforeAll(async () => {
  try {
    await Todos.drop();
  } catch (error) {
    // console.error(error);
  }
  
});

describe('GET /api/v1/todo', () => {
  it('Responds with an array of todo', async () => 
    request(app)
      .get('/api/v1/todo')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response)=> {
        expect(response.body).toHaveProperty('length');
        expect(response.body.length).toBe(0);
        // expect(response.body[0]).toHaveProperty('content');
        // expect(response.body[0]).toHaveProperty('done');
      }),
  );
});

describe('POST /api/v1/todo', () => {
  it('Responds with an error if the todo is empty', async () => 
    request(app)
      .post('/api/v1/todo')
      .set('Accept', 'application/json')
      .send({
        content: '',
      })
      .expect('Content-Type', /json/)
      .expect(422)
      .then((response)=> {
        expect(response.body).toHaveProperty('message');
      }),
  );

  it('Responds with an error if the todo is to much chars', async () => 
    request(app)
      .post('/api/v1/todo')
      .set('Accept', 'application/json')
      .send({
        content: 'Lorem  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      })
      .expect('Content-Type', /json/)
      .expect(422)
      .then((response)=> {
        expect(response.body).toHaveProperty('message');
      }),
  );

  it('Create one Todo and Responds with todo that created', async () => 
    request(app)
      .post('/api/v1/todo')
      .set('Accept', 'application/json')
      .send({
        content: 'Hi Test',
        done: false,
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response)=> {
        expect(response.body).toHaveProperty('_id');
        expect(response.body).toHaveProperty('content');
        expect(response.body).toHaveProperty('done');
        expect(response.body.content).toBe('Hi Test');
        expect(response.body.done).toBe(false);
      }),
  );
});
