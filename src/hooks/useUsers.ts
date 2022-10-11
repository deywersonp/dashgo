import { useQuery } from "react-query";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type Response = {
  users: User[];
};

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get<Response>('/users');

  const users = data.users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }));

  return users;
};

export const useUsers = () => {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5 //5 seconds
  });
}