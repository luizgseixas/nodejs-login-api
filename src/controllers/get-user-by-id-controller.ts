import { Request, Response } from 'express';
import { UsersRepositoryInMemory } from '../repositories/users-repository';
import { GetUserByIdUseCase } from '../usecases/get-user-by-id-usecase';

export class GetUserByIdController {
  constructor (private readonly getUserByIdUseCase: GetUserByIdUseCase) {}

  handle (req: Request, res: Response): void {
    try {
      const { id } = req.params;

      const user = this.getUserByIdUseCase.execute(Number(id));

      res.status(200).json(user);
    } catch (err: any) {
      console.error(err);
      res.status(err.statusCode).json({ error: err.message, statusCode: err.statusCode });
    }
  }
}

const usersRepository = UsersRepositoryInMemory.getInstance();

const getUserByIdUseCase = new GetUserByIdUseCase(usersRepository);

export default new GetUserByIdController(getUserByIdUseCase);
