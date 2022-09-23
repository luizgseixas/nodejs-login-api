interface IRequester {
  getUrl: () => void;
}

interface IRepository {
  save: (user) => void;
}

class UserRepositoryMongo implements IRepository {
  save (user) {
    // this.mongodb.save()
  }

  get () {}
}

class UserRepositoryMysql implements IRepository {
  save (user) {
    // this.mysql.save()
  }
}

class SaveUser {
  repository: IRepository;
  constructor (repository: IRepository) {
    this.repository = repository;
  }

  save (user) {
    this.repository.save(user);
  }
}

new SaveUser(new UserRepositoryMysql());

class Requester implements IRequester {
  public name: string;
  private readonly url: string;
  static peso: string;
  private readonly apiKey: string;

  constructor (batatinha: string) {
    this.name = batatinha;
  }

  static sayHello () {
    console.log('Hello');
  }

  getUrl (): void {
    console.log(this.url);
  };
}

class NewRequester extends Requester {
  constructor (url: string) {
    super(url);
  }
}

const n = new NewRequester('batatinha.com.br');

n.getUrl();

const c = new Requester('htpp://localhost:3333');

c.getUrl();

Requester.sayHello();
