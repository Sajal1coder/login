import { useMutation } from '@tanstack/react-query';
import { loginUser, LoginData, AuthResponse } from '../services/authServices';

export function useLogin() {
  return useMutation<AuthResponse, Error, LoginData>({
    mutationFn: loginUser, // Explicitly define the mutation function
  });
}
