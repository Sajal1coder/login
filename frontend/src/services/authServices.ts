import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Adjust if your backend runs elsewhere

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string; // Assuming the backend returns a token
  user: {
    id: string;
    email: string;
  };
}

export async function loginUser(data: LoginData): Promise<AuthResponse> {
  const response = await axios.post<AuthResponse>(`${API_URL}/auth/login`, data);
  return response.data;
}

export async function registerUser(data: LoginData): Promise<{ message: string; userId: number }> {
  const response = await axios.post(`${API_URL}/auth/register`, data);
  return response.data;
}
