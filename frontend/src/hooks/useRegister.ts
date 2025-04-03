import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { RegisterSchemaType } from '../utils/zodschema';

export const useRegister = () => {
    return useMutation({
      mutationFn: async (data: RegisterSchemaType) => {
        const response = await axios.post(
          'http://localhost:4000/auth/register', // Full URL
          {
            email: data.email,
            password: data.password
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        return response.data;
      },
    });
  };