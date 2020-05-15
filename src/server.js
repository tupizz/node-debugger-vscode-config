import express from 'express';
import UserRepository from './repositories/UserRepository';

const app = express();

app.get('/', (req, res) => {
  const repository = new UserRepository();

  return res.json({ users: repository.getUser() });
});

app.listen(3333);
