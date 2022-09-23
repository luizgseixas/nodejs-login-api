
export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export class UsersRepositoryInMemory {
  static instance: UsersRepositoryInMemory;
  users: IUser[];

  constructor () {
    this.users = [{
      id: 1,
      name: 'Luiz Seixas',
      email: 'luiz@mail.com',
      password: '1234'
    }];
  }

  static getInstance (): UsersRepositoryInMemory {
    if (!this.instance) this.instance = new UsersRepositoryInMemory();

    return this.instance;
  }

  create (user: IUser): void {
    // auto incrementação de id para cadastro
    const idIncrement = this.users.length + 1;

    const newUser = Object.assign(user, { id: idIncrement });

    this.users.push(newUser);
  }

  findById (id: number): IUser | null {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  findByEmail (email: string): IUser | null {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  findAll (): IUser[] {
    return this.users;
  }
}
