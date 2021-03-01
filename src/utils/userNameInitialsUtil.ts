type IUserNameInitials = (value: string) => string;

export const UserNameInitialsUtil: IUserNameInitials = (value) => {
  const arr = value.split(' ');
  return arr[0][0] + arr[1][0];
}