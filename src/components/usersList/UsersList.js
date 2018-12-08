import './usersList.scss';

const User = (props) => {
  const { user, clickHandler } = props;
  const { name } = user;

  return (
    <li className="user-item" onClick={() => clickHandler(user.id)}>
      { name }
    </li>
  );
};

const Posts = (props) => {
  const { posts } = props;

  return (
    <div className="posts">
      <h2>Posts</h2>
      <ul>
        {
          posts.map(post => (
            <li key={post.id} className="post-item">
              <h4>{post.title}</h4>
              <div>{post.body}</div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export const UsersList = (props) => {
  const { users, posts, handleClick } = props;

  return (
    <div className="users-container">
      <ul className="users-list">
        {
          users.map(user => <User key={user.id} user={user} clickHandler={handleClick} />)
        }
      </ul>
      <Posts posts={posts} />
    </div>
  );
};
