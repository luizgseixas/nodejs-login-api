import { UsersRepositoryInMemory } from '../repositories/users-repository';
import { CreateUserUseCase } from './create-user';

describe('CreateUserUseCase', () => {
  it('should sum 1 + 1', async () => {
    const repo = new UsersRepositoryInMemory();
    const sut = new CreateUserUseCase(repo);

    const findSpy = jest.spyOn(repo, 'findByEmail');
    const createSpy = jest.spyOn(repo, 'create');

    console.log(new Date().toLocaleDateString());

    sut.execute({ email: 'any_email' });

    expect(findSpy).toHaveBeenCalledWith('any_email');
    expect(createSpy).toHaveBeenCalledWith({ id: 2, email: 'any_email' });
  });
});
