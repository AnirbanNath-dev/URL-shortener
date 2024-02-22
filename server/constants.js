import { config } from "dotenv";

config({
    path : './.env'
});

const DATA = {
    MONGO_URI : process.env.MONGO_URI,
    DB_NAME : process.env.DB_NAME
}


export default DATA