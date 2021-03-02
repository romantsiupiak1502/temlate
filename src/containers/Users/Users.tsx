import React from 'react';

import { UserCard } from './UserCard';

type IUsersItem = {
  id: number,
  name: string,
  email: string,
  address: {
    city: string,
    street: string,
  },
  phone: string,
}

interface IUsersProps {
  users: IUsersItem[];
}

export const Users: React.FC<IUsersProps> = props => {
  const { users } = props;

  return (
    <>
      { users.map((item) => <UserCard
        id={ item.id }
        name={ item.name }
        email={ item.email }
        city={ item.address.city }
        street={ item.address.street }
        phone={ item.phone }/>
      ) }
    </>
  );
};
