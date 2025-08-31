import express from 'express';
import authenticateJWT from './middleware/auth';
import routes from './routes';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1', routes);

// Error handling
app.use(authenticateJWT);

export default app;