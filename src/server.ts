import express from 'express';
import * as database from './database'
import { produtosRoutes } from './routes/produtos.routes';

database.connect();

const app = express();

app.use(express.json());

app.use(produtosRoutes);

app.listen(5000, () => console.log("Server is runnig!"));
