interface IRequester {
  getUrl: () => void;
}

class Requester implements IRequester {
  public name: string;
  private url: string;
  public peso: string;

  constructor(url: string) {
    this.url = url
  }

  static sayHello() {
    console.log('Hello')
  }

  getUrl() {
    console.log(this.url)
  }
}

class NewRequester extends Requester {
  constructor(url: string) {
    super(url);
  }
}

const n = new NewRequester('batatinha.com.br')

n.getUrl()

const c = new Requester('batatinha.com.br');

c.getUrl()

Requester.sayHello()