import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchemaType } from '../utils/zodschema';
import { useLogin } from '../hooks/useLogin';
import './loginPage.css';

const LoginPage: React.FC = () => {
  const { mutate: login, isPending, isError, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchemaType) => {
    login(data, {
      onSuccess: (res) => {
        alert(`Login successful! User ID: ${res.user?.id || 'unknown'}`);
      },
      onError: (err) => {
        console.error('Login failed:', err);
      },
    });
  };

  return (
    <div className="login-container">
      <h2>Welcome back!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label htmlFor="email">UID</label>
          <input id="email" type="text" {...register('email')} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" {...register('password')} />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <button type="submit" className="login-btn" disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {isError && <p className="error-message">{(error as any)?.response?.data?.message || 'Login failed'}</p>}
    </div>
  );
};

export default LoginPage;
