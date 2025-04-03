import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-min-32-chars';
const SALT_ROUNDS = 12;

// Only keep what's needed for login/register
export const hashPassword = (password: string) => bcrypt.hash(password, SALT_ROUNDS);
export const comparePassword = bcrypt.compare;
export const generateToken = (userId: string) => jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });

// Remove verifyToken since we're not using it