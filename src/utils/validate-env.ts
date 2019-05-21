import {port, cleanEnv, str} from 'envalid'

// Function to validate all required environment variables are set
export function validateEnv() {
    const variables = {
        PORT: port(),
        API_VER_1: str(),
        DB_HOST: str(),
        DB_USER: str(),
        DB_NAME: str(),
        DB_PASS: str(),
        DOMAIN: str()
    };

    cleanEnv(process.env, variables);
}

