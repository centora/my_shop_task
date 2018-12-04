import './usersList.scss';

const User = (props) => {
  const { user } = props;
  const { firstName, lastName, age } = user;
  return (
    <div className="user-item">
      <strong>{`${firstName} ${lastName}`}</strong>
      {age}
    </div>
  );
};

export const UsersList = (props) => {
  const { users } = props;
  return (
    <div className="users-list">
      {
        users.map((user, index) => <User key={index} user={user} />)
      }
    </div>
  );
};
