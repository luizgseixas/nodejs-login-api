import express, { Request, Response } from 'express';

const server = express();
server.use(express.json());

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface IUserBody {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

class ExampleError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode?:number) {
    super(message);
    this.name = 'Example error';
    this.statusCode = statusCode || 500
  }
};

let users: IUser[] = [{
  id: 1,
  name: "Luiz Seixas",
  email: "luiz@mail.com",
  password: "1234",
}];

server.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

server.get('/user/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const user = users.find(user => user.id === Number(id));

    if (!user) throw new ExampleError('Usuário não encontrado', 404);

    res.status(200).json(user)
  } catch (err) {
    console.error(err);
    res.status(err.statusCode).json({ error: err.message, statusCode: err.statusCode });
  }
})

server.get('/users', (req: Request, res: Response) => {
  try {
    if (users.length === 0) throw new ExampleError('Não há usuários cadastrados', 404)
    res.json(users)
  } catch (err) {
    console.error(err);
    res.status(err.statusCode).json({ error: err.message, statusCode: err.statusCode });
  }
})

server.post('/user', (req: Request, res: Response) => {
  try {
    const body: IUserBody = req.body

    console.log(body)

    // validando senhas
    if (body.password !== body.passwordConfirmation) throw new ExampleError('As senhas devem ser iguais', 400)

    // auto incrementação de id para cadastro
    const idIncrement = users.length + 1

    const newUser = Object.assign(body, { id: idIncrement });

    // validação se usuário já está cadastrado
    // método "some" verifica se ao menos um valor do array passa no test implementado
    const alreadyRegistered = users.some(user => user.email === newUser.email);

    // Forma antiga de validar
    // const alreadyRegistered = users.find(user => {
    //   if (newUser.email === user.email) return true;
    // })

    if (alreadyRegistered) throw new ExampleError('Usuário já cadastado', 400);

    users.push(newUser);
    res.json({ message: 'Usuário cadastrado!' })

  } catch (err) {
    console.error(err);
    res.status(err.statusCode).json({ error: err.message, statusCode: err.statusCode });
  }

})

server.listen(3333, () => console.log('Server runing on host: http://localhost:3333'))
