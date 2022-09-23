export class ServerError extends Error {
  public readonly statusCode: number;

  constructor (message: string, statusCode?: number) {
    super(message);
    this.name = 'Example error';
    this.statusCode = statusCode || 500;
  }
};
