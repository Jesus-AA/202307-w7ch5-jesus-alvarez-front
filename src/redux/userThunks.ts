import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserLoginData, UserNoId } from '../model/user';
import { ApiUserRepository } from '../services/api.user.repository';

export const loadThunk = createAsyncThunk<User[], ApiUserRepository>(
  'users/load',
  async (repo) => {
    const users = await repo.getAll('http://localhost:4300/users');
    return users;
  }
);

export const addThunk = createAsyncThunk<
  User,
  {
    repo: ApiUserRepository;
    user: UserNoId;
  }
>('users/add', async ({ repo, user }) => {
  const fullUser = await repo.create(user);
  return fullUser;
});

export const loginThunk = createAsyncThunk<
  User,
  {
    repo: ApiUserRepository;
    user: UserLoginData;
  }
>('users/login', async ({ repo, user }) => {
  const loginUser = await repo.login(user);
  return loginUser;
});
