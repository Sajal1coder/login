import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterSchemaType } from '../utils/zodschema';
import { useRegister } from '../hooks/useRegister';
import './loginPage.css'; // Reusing the same CSS

const RegisterPage: React.FC = () => {
  const { mutate: register, isPending, isError, error } = useRegister();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchemaType) => {
    register(data, {
      onSuccess: (res) => {
        alert(`Registration successful! User ID: ${res.id || 'unknown'}`);
      },
      onError: (err) => {
        console.error('Registration failed:', err);
      },
    });
  };

  return (
    <div className="login-container">
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...formRegister('email')} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" {...formRegister('password')} />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            {...formRegister('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type="submit" className="login-btn" disabled={isPending}>
          {isPending ? 'Registering...' : 'Register'}
        </button>
      </form>

      {isError && (
        <p className="error-message">
          {(error as any)?.response?.data?.message || 'Registration failed'}
        </p>
      )}
    </div>
  );
};

export default RegisterPage;