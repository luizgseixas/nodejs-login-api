import express, { Request, Response } from 'express';

const server = express();
server.use(express.json());

server.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

server.get('/batatinha', (req: Request, res: Response) => {
  const qr = req.query

  console.log(qr)

  res.json({ message: 'Aqui sua batatinha' })
})

server.get('/batatinha/:id', (req: Request, res: Response) => {
  const param = req.params

  console.log(param)

  res.json({ message: 'Aqui sua batatinha' })
})

server.post('/batatinha', (req: Request, res: Response) => {
  const bd = req.body

  console.log(bd)

  res.json({ message: 'Aqui sua batatinha' })
})

server.listen(3333, () => console.log('Server runing on host: http://localhost:3333'))
