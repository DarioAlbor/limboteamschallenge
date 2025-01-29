import { Post, User } from '../types';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchPosts = async (page: number, limit: number, query: string = ''): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}&q=${query}`);
  if (!response.ok) {
    throw new Error('Error al obtener los posts');
  }
  return response.json();
};

export const fetchUser = async (userId: number): Promise<User> => {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  if (!response.ok) {
    throw new Error('Error al obtener el usuario');
  }
  return response.json();
};