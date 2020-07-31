import express, { query } from 'express';

const app = express();

app.use(express.json());

const transactions = [];

app.get('/', (req, res) => {
  const json = { message: 'hello word' };
  res.json(json);
});

app.get('/transactions/:transactionsId', (req, res) => {
  const { transactionsId } = req.params;

  transactions.push(transactionsId);
  res.json(transactions);
});

app.listen(3333, () => {
  console.log('⚡️Server on port 3333');
});
