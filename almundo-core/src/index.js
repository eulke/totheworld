import express from 'express'
import api from './api'
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors());
app.use('/api/v1', api);

app.get('/', (req, res) => {
  res.send('Hello World, from express');
});

app.listen(port, () => console.log(`Server started at http://localhost:${port}!`))