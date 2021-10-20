import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticatedUserService';

class AutheticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const service = new AuthenticateUserService();

    try {
      const result = await service.execute(code);
      return response.json(result);

    } catch(err) {
      return response.json({ error: err.message });
    }
  }

  async redirectToAuthorize(request: Request, response: Response) { 
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
  }

  async signToGithub(request: Request, response: Response) {
    const { code } = request.query;

    return response.json(code);
  }
}

export { AutheticateUserController };