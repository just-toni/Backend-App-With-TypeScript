import express from 'express';
import routes from './routes/authRoutes.js'
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use('/auth', routes);
const port = 3000
try{
  app.listen(port, () => console.log(`listening on port ${port}`))
}
catch(err){
  console.log(err);
}