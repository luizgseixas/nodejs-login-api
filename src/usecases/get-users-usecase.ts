import { ServerError } from '../errors/server-error';
import { IUser, UsersRepositoryInMemory } from '../repositories/users-repository';

export class GetUsersUseCase {
  constructor (private readonly usersRepository: UsersRepositoryInMemory) {}

  execute (): IUser[] {
    const users = this.usersRepository.findAll();

    if (users.length === 0) throw new ServerError('Não há usuários cadastrados', 404);

    return users;
  }
}
