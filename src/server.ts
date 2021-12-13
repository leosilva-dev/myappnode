import express from 'express';
import 'express-async-errors'
import * as database from './database'
import { AppError } from './errors/AppError';
import { produtosRoutes } from './routes/produtos.routes';

database.connect();

const app = express();

app.use(express.json());

app.use(produtosRoutes);

app.use((err, request, response, next) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({status:"error", message: err.message});
    }

    return response.status(500).json({status:"error", message: "Internal server error"});
})

app.listen(5000, () => console.log("Server is runnig!"));
