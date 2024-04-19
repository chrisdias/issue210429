import { Request, Response } from 'express';

class IndexController {
  getIndex(req: Request, res: Response) {
    res.send('Hello, World!');
  }
}

export default IndexController;