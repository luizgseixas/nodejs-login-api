import { Request, Response } from 'express';
import { UsersRepositoryInMemory } from '../repositories/users-repository';
import { GetUsersUseCase } from '../usecases/get-users-usecase';

class GetUsersController {
  constructor (private readonly getUsersUseCase: GetUsersUseCase) {}

  handle (req: Request, res: Response): void {
    try {
      const users = this.getUsersUseCase.execute();
      res.json(users);
    } catch (err: any) {
      console.error(err);
      res.status(err.statusCode).json({ error: err.message, statusCode: err.statusCode });
    }
  }
}

const usersRepository = UsersRepositoryInMemory.getInstance();

const getUsersUseCase = new GetUsersUseCase(usersRepository);

export default new GetUsersController(getUsersUseCase);
