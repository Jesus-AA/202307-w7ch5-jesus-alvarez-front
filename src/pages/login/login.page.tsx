import { Login } from '../../components/login/login';
import { AllUsers } from '../../components/users/users';
import { useUsers } from '../../hooks/useUsers';

export function LoginPage() {
  const { usersState } = useUsers();
  usersState.token;

  if (usersState.token === false) {
    return <Login></Login>;
  }
  return <AllUsers></AllUsers>;
}
