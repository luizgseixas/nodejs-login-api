import GetUserByIdController from '../controllers/get-user-by-id-controller';
import GetUsersController from '../controllers/get-users-controller';
import SignUpController from '../controllers/sign-up-controller';
import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/user/:id', (req: Request, res: Response) => GetUserByIdController.handle(req, res));

routes.get('/users', (req: Request, res: Response) => GetUsersController.handle(req, res));

routes.post('/user', (req: Request, res: Response) => SignUpController.handle(req, res));

export default routes;
