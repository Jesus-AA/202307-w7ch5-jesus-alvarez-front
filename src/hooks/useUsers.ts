import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserLoginData, UserNoId } from '../model/user';
import { addThunk, loadThunk, loginThunk } from '../redux/userThunks';
import { ApiUserRepository } from '../services/api.user.repository';
import { NetworkDispatch, RootState } from '../store/store';

export function useUsers() {
  const repo = useMemo(
    () => new ApiUserRepository('http://localhost:4300/users'),
    []
  );

  const usersState = useSelector((state: RootState) => state.networkUsers);
  const dispatch = useDispatch<NetworkDispatch>();

  const loginUser = async (user: UserLoginData) => {
    dispatch(loginThunk({ repo, user }));
  };

  const loadUsers = useCallback(async () => {
    dispatch(loadThunk(repo));
  }, [repo, dispatch]);

  const addUser = async (user: UserNoId) => {
    dispatch(addThunk({ repo, user }));
  };

  return {
    loadUsers,
    addUser,
    loginUser,
    usersState,
  };
}
