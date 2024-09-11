import express from 'express';
import routes from './routes/authRoutes.js'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use('/authRoutes.js', routes);
const port = process.env.PORT
try{
  app.listen(port, () => console.log(`listening on port ${port}`))
}
catch(err){
  console.log(err);
}