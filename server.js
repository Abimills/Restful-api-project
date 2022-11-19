import fetch from 'node-fetch';
import express, { response } from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';


const app = express();
const PORT = 5000;
app.use(bodyParser.json()); 
app.use('/users',userRoutes);

app.get('/',(req,res) => {

res.send('hii ther you world')


})





app.listen(PORT,() => console.log(`Server running on port http://localhost:${PORT}`))