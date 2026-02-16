import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import createDatabase from './database/createDatabase.js';
import routesProdutos from './routes/produtosRoutes.js';
import routesUsuarios from './routes/usuariosRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(routesProdutos);
app.use(routesUsuarios);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(createDatabase());
});