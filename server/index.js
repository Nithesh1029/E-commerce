import express from 'express';
import cors from 'cors';
import Connection from './DB/db.js';
import 'dotenv/config';
import Defaultdata from './default.js';

import router from './routes/route.js';


const app=express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('server Running');
});
app.use('/',router);

Connection();



//Defaultdata();

app.listen(PORT,()=>{
    console.log(`Connected on ${PORT}d`);
});


