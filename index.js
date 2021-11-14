import './.env.js';
import Logger from './src/libs/logger.js'
import app from './src/app.js';

const logger = new Logger({
    file: 'App'
});
const PORT = 3000;

app.listen(PORT, () => {
    logger.success(`App running app http://localhost:${PORT}`);
});

