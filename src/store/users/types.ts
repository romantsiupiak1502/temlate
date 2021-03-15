type IUsersAddress = {
  city: string,
  street: string,
  suite: string,
  zipcode: string,
};

export type IUsersItem = {
  id: number,
  name: string,
  email: string,
  address: IUsersAddress,
  phone: string,
  website: string,
}

export type IUsersStore = {
  users: IUsersItem[],
  searchUsers: IUsersItem[],
  onSearchByNameChange: string,
  onSearchByEmailChange: string,
}
