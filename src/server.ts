import 'dotenv/config'
import express from 'express'
import {validateEnv} from './utils/validate-env'
import bodyParser from 'body-parser'
import {NoAuthRoutes} from './routes/NoAuthRoutes'
import {error_404} from './middleware/error-404'
import {DatabaseConfig} from './dao/DatabaseConfig'
import {Dao} from './dao/Dao'
import {AuthRoutes} from "./routes/AuthRoutes";
import {tokenMiddleware} from "./middleware/token-validator";

// Validate env variables
validateEnv();

// Initialize and configure express app
const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Initialize Database
const dbConfig = new DatabaseConfig();
const dao = new Dao(dbConfig.databaseConnection);

// Initialize routes
const noAuthRoutes = new NoAuthRoutes(dao);
const authRoutes = new AuthRoutes(dao);

// Assign routes to app
app.use(`/${process.env.API_VER_1}`, noAuthRoutes.router);
app.use(`/${process.env.API_VER_1}`, tokenMiddleware, authRoutes.router);
app.use(error_404);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    return console.log(`Server listening on port: ${PORT}`);
});