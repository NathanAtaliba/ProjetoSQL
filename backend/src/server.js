import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import createDatabase from './database/db.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(createDatabase());
});