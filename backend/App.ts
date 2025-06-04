import { createClient } from "redis";
import dotenv from "dotenv";
import process from "node:process";

dotenv.config()

const TOKEN = 


const client = createClient({
    url: `rediss://default:${process.env.DB_TOKEN}@{proce}`
});
client.on