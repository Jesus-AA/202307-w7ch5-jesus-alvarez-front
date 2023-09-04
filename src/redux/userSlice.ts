import { createSlice } from '@reduxjs/toolkit';
import { User } from '../model/user';
import { addThunk, loadThunk, loginThunk } from './userThunks';

export type UserState = {
  users: User[];
  loadState: 'loading' | 'loaded' | 'error' | '';
  error: Error | null;
  user: null | 'logged';
  token: boolean;
};

const initialState: UserState = {
  users: [],
  loadState: '',
  error: null,
  user: null,
  token: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadThunk.pending, (state) => {
      state.loadState = 'loading';
    });
    builder.addCase(
      loadThunk.fulfilled,
      (state, { payload }: { payload: User[] }) => {
        state.loadState = 'loaded';
        state.users = payload;
      }
    );
    builder.addCase(
      addThunk.fulfilled,
      (state, { payload }: { payload: User }) => {
        state.users.push(payload);
      }
    );
    builder.addCase(addThunk.rejected, (state) => {
      const error = new Error('Error while registering a new user');
      state.loadState = 'error';
      state.error = error;
    });
    builder.addCase(loginThunk.pending, (state) => {
      state.loadState = 'loading';
      state.user = null;
      state.token = false;
    });
    builder.addCase(loginThunk.fulfilled, (state) => {
      state.loadState = 'loaded';
      state.user = 'logged';
      state.token = true;
    });
  },
});

export const actions = usersSlice.actions;
export default usersSlice.reducer;
