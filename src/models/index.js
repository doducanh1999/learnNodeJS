import Sequelize from 'sequelize';
import Logger from '../libs/logger.js';
import dbConfig from '../config/db.config.js';
import { fileURLToPath } from 'url';
const logger = new Logger({file:fileURLToPath (import.meta.url)});
const connection = new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        logging: process.env.NODE_ENV === 'development' && logger.info,
        dialect: dbConfig.DIALECT,

        pool: {
            ...dbConfig.POOL,
        },
        define: {
            underscored: true,
            freezeTableName: true,
            charset: 'utf8'
        },
        
    },
);

export { connection, Sequelize};