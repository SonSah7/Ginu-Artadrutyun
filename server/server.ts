import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import morgan from 'morgan';
import cors from 'cors'
import  { graphqlHTTP } from 'express-graphql';
// import { schema } from './schema/schema';//scheman sarqeluc heto
const app = express();
const port:string | number = process.env.PORT;


app.use(cors())
app.use(morgan(`dev`));
app.use(express.json())
app.use(express.urlencoded({
   extended: false
}))

// app.use('/graphql',graphqlHTTP({
//     schema,
//     graphiql:true
// })) // scheman sarqeluc heto


app.listen(port, () => console.log(`server is runnig on port http://localhost:${port}`));

