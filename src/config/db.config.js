const dbConfig = {
    HOST: process.env.HOST,
    DATABASE: process.env.DATABASE,
    USER: process.env.DB_USER,
    PASSWORD: process.env.PASSWORD,
    DIALECT: 'postgres',
    POOL: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

export default dbConfig;