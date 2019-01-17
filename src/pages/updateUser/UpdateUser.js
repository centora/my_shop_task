import './updateUser.scss';
import { UserForm } from 'components/userForm';

export const UpdateUser = ({ user }) => {
  console.log(user);
  return (
    <>
      <h1>Update User</h1>
      <UserForm data={user} />
    </>
  );
};
