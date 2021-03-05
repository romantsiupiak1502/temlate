import React from 'react';

import { styled } from "../../styles";

import { UserCard } from './UserCard';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 75px);
  overflow-y: scroll;
`;

type IUsersAddress = {
  city: string,
  street: string
};

type IUsersItem = {
  id: number,
  name: string,
  email: string,
  address: IUsersAddress,
  phone: string,
}

interface IUsersProps {
  users: IUsersItem[];
}

export const Users: React.FC<IUsersProps> = props => {
  const { users } = props;

  return (
    <Wrapper>
      { users.map((item) =>
        <UserCard
          id={ item.id }
          name={ item.name }
          email={ item.email }
          city={ item.address.city }
          street={ item.address.street }
          phone={ item.phone }
        />
      ) }
    </Wrapper>
  );
};
