import express from 'express';
import { register, login } from '../controllers/auth.controller';

const router = express.Router();

// Only two routes
router.post('/register', async (req, res, next) => {
    try {
        const user = await register(req.body.email, req.body.password);
        res.status(201).json(user);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
});

router.post('/login', async (req, res, next) => {
  try {
    res.json(await login(req.body.email, req.body.password));
  } catch (error) {
    next(error);
  }
});

export default router;