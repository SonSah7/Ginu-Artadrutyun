const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const morgan = require("morgan");
const cors = require('cors');


app.use(cors())
app.use(morgan(`dev`));
app.use(express.json())
app.use(express.urlencoded({
 extended: false
}))




app.listen(port, () => console.log(`server is runnig on port ${port}`));