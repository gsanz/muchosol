import express from "express";
import config from "./config/config";


const app = express();
    
app.use(express.json());
app.listen(config.server.port);
console.log("Server on port", config.server.port);
