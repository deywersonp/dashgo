import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../services/api";

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  users: User[];
  totalCount: number;
};

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get<GetUsersResponse>('/users', {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count']);

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

  return {
    users,
    totalCount,
  };
};

export const useUsers = (page: number, options?: Omit<UseQueryOptions<unknown, unknown, unknown, (string | number)[]>, "queryKey" | "queryFn">) => {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 1, //10 minutos
    ...options
  }) as UseQueryResult<GetUsersResponse, unknown>
}