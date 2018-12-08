import './usersList.scss';

const User = (props) => {
  const { user, clickHandler } = props;
  const { name } = user;

  return (
    <div className="user-item" onClick={() => clickHandler(user)}>
      { name }
    </div>
  );
};
export const UsersList = (props) => {
  const { users, handleClick, clearHandle } = props;
  return (
    <div>
      <div className="users-list">
        {
          users.map(el => <User key={el.id} user={el} clickHandler={handleClick} />)
        }
      </div>
      <button onClick={() => clearHandle()}>Clear</button>
    </div>
  );
};