import { Request, Response } from 'express';
import { ServerError } from '../errors/server-error';
import { UsersRepositoryInMemory } from '../repositories/users-repository';
import { CreateUserUseCase } from '../usecases/create-user';

interface IUserBody {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export class SignUpController {
  constructor (private readonly createUserUsecase: CreateUserUseCase) {}

  handle (req: Request, res: Response): void {
    try {
      const body: IUserBody = req.body;

      console.log(body);

      // validando senhas
      if (body.password !== body.passwordConfirmation) throw new ServerError('As senhas devem ser iguais', 400);

      this.createUserUsecase.execute(body);

      res.json({ message: 'Usuário cadastrado!' });
    } catch (err: any) {
      console.error(err);
      res.status(err.statusCode).json({ error: err.message, statusCode: err.statusCode });
    }
  }
}

const usersRepository = UsersRepositoryInMemory.getInstance();

const createUserUseCase = new CreateUserUseCase(usersRepository);

export default new SignUpController(createUserUseCase);
