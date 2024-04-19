import express, { Request, Response } from 'express';
import  IndexController  from './controllers/index';
import { setRoutes } from './routes/index';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
setRoutes(app, new IndexController());

// Error handling middleware
app.use((err: Error, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});