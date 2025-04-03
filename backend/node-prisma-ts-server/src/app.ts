import express from 'express';
import cors from 'cors';  // Add this import
import authRouter from './routes/auth.route';

const app = express();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true, // If using cookies/sessions
  methods: ['GET', 'POST', 'PUT', 'DELETE'] // Allowed methods
}));

app.use(express.json());
app.use('/auth', authRouter);

// ... rest of your config
export default app;