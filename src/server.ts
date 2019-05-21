import 'dotenv/config'
import express from 'express'
import {validateEnv} from './utils/validate-env'
import bodyParser from 'body-parser'
import {NoAuthRoutes} from './routes/NoAuthRoutes'
import {error_404} from './middleware/error-404'
import {DatabaseConfig} from './dao/DatabaseConfig'
import {Dao} from './dao/Dao'

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

// Assign routes to app
app.use(`/${process.env.API_VER_1}`, noAuthRoutes.router);
app.use(error_404);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (error: any) => {
    if (error)
        return console.log(`Error listening on port ${PORT}: ${error}`);

    return console.log(`Server listening on port: ${PORT}`);
});