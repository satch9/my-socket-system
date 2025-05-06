import 'dotenv/config';
import { createServer } from './server-core.js';
import { PORT } from './config/socket-config.js';

const { server } = createServer();

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});