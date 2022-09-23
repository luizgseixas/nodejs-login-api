import express from 'express';
import routes from './routes/rourtes';

const server = express();
server.use(express.json());
server.use(routes);

server.listen(3333, () => console.log('Server runing on host: http://localhost:3333'));
