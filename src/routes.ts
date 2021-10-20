import { Router } from 'express';
import { AutheticateUserController } from './controllers/AutheticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessageController } from './controllers/GetLast3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const routes = Router();

routes.post("/authenticate", new AutheticateUserController().handle);
routes.get('/github', new AutheticateUserController().redirectToAuthorize);

routes.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

routes.get("/messages/last3", new GetLast3MessageController().handle);

routes.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { routes };