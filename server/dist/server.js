"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const postgres_1 = require("./model/postgres");
// import { schema } from './schema/schema';//scheman sarqeluc heto
const app = express_1.default();
const port = process.env.port;
postgres_1.client.connect((err) => {
    if (err)
        throw err;
    console.log('postgresDB connected');
});
app.use(cors_1.default());
app.use(morgan_1.default(`dev`));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: false
}));
// app.use('/graphql',graphqlHTTP({
//     schema,
//     graphiql:true
// })) // scheman sarqeluc heto
app.listen(port, () => console.log(`server is runnig on port `));
const text = 'abacsdb';
const check = (string) => {
    const array = [...string];
    console.log(array);
    const newArray = [...new Set(string)];
    return newArray;
};
console.log(check(text));
//# sourceMappingURL=server.js.map