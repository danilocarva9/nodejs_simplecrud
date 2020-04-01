require('dotenv').config(); 
// config.js
const env = process.env.NODE_ENV; // 'dev', 'prd'

const dev = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT) || 3000
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: parseInt(process.env.DEV_DB_PORT) || 27017,
        name: process.env.DEV_DB_NAME || 'db',
        user: process.env.DEV_DB_USER || 'root',
        password: process.env.DEV_DB_PASSWORD || ''
    }
};

const prd = {
    app: {
        port: parseInt(process.env.PRD_APP_PORT) || 3000
    },
    db: {
        host: process.env.PRD_DB_HOST || 'localhost',
        port: parseInt(process.env.PRD_DB_PORT) || 27017,
        name: process.env.PRD_DB_NAME || 'db',
        user: process.env.PRD_DB_USER || 'root',
        password: process.env.PRD_DB_PASSWORD || ''
    }
};

const config = {dev, prd};
module.exports = config[env];