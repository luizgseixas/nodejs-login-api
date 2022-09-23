import { ServerError } from '../errors/server-error';
import { UsersRepositoryInMemory, IUser } from '../repositories/users-repository';

export class GetUserByIdUseCase {
  constructor (private readonly usersRepository: UsersRepositoryInMemory) {}

  execute (id: number): IUser {
    const user = this.usersRepository.findById(id);

    if (!user) throw new ServerError('Usuário não encontrado', 404);

    return user;
  }
}
