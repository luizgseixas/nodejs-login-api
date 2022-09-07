import express, { Request, Response } from 'express';

const server = express();
server.use(express.json());

server.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

server.post('/batatinha', (req: Request, res: Response) => {
  const bd = req.body

  console.log(bd)

  res.json({ message: 'Aqui sua batatinha' })
})

server.listen(3333, () => console.log('Server runing on host: http://localhost:3333'))
