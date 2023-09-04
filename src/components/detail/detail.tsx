import { Link, useParams } from 'react-router-dom';

import { useUsers } from '../../hooks/useUsers';
import { User } from '../../model/user';
import styles from './detail.module.scss';

export function Detail() {
  const { usersState } = useUsers();

  const { id } = useParams();

  const user = usersState.users.find((user) => user.id === id) as User;

  return (
    <div className={styles['main-detail-div']}>
      <div className={styles['sec-detail-div']}>
        <p>Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>username: {user.userName}</p>
        <p>email: {user.email}</p>
      </div>
      <Link
        role="button"
        id="backbutton"
        className={styles['back-button']}
        to={'/login'}
      >
        Back
      </Link>
    </div>
  );
}
