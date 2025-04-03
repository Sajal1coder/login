import { PrismaClient } from '@prisma/client';
import { AppError } from '../utils/error';
import { hashPassword, comparePassword, generateToken } from '../utils/auth';

const prisma = new PrismaClient();

// REGISTER
export const register = async (email: string, password: string) => {
  if (!email || !password) throw new AppError('Email and password required', 400);
  
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) throw new AppError('Email already exists', 400);

  return prisma.user.create({
    data: { 
      email, 
      password: await hashPassword(password) 
    },
    select: { id: true, email: true } // Never return password
  });
};

// LOGIN
export const login = async (email: string, password: string) => {
  if (!email || !password) throw new AppError('Email and password required', 400);

  const user = await prisma.user.findUnique({ 
    where: { email },
    select: { id: true, email: true, password: true } // Need password for verification
  });

  if (!user || !(await comparePassword(password, user.password))) {
    throw new AppError('Invalid credentials', 401);
  }

  return {
    user: { id: user.id, email: user.email },
    token: generateToken(user.id)
  };
};