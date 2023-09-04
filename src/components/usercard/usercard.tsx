import { Link } from 'react-router-dom';
import { User } from '../../model/user';

type Props = {
  user: User;
};

export function UserCard({ user }: Props) {
  return (
    <li>
      <div>
        <Link to={`/detail/${user.id}`}>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
        </Link>
      </div>
    </li>
  );
}
