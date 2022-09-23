import { UsersRepositoryInMemory } from '../repositories/users-repository';
import { ServerError } from '../errors/server-error';

export class CreateUserUseCase {
  constructor (private readonly usersRepository: UsersRepositoryInMemory) {}

  execute (user: any): void {
    // validação se usuário já está cadastrado
    // método "some" verifica se ao menos um valor do array passa no test implementado
    // const alreadyRegistered = users.some(user => newUser.email === user.email);
    // })

    const alreadyRegistered = this.usersRepository.findByEmail(user.email);

    if (alreadyRegistered) throw new ServerError('Usuário já cadastado', 400);

    this.usersRepository.create(user);
  }
}
