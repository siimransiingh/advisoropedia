import express from 'express'
import cors from 'cors'
import morgan from "morgan"
import connect from './database/connection.js';
import router from './router/route.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable(morgan('x-powered-by')); // less hackers knowabout our stack

const port = 8080;

app.get('/',(req,res)=> {
    res.status(201).json("home request")
})

// api routes
app.use('', router)

connect().then(()=>{
    try {
        app.listen(port,()=>{
            console.log("server connected")
        })
    } catch (error) {
        console.log("cannot connectto server")
    }
}).catch(error=>{
    console.log("invalid db connection ")
})

