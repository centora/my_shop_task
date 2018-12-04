import { Aside } from '../aside';
import { Greeting } from '../greeting';
import { Numbers } from '../numbers';
import { UsersList } from '../usersList';
import './main.scss';

const Error = (props) => {
  const { color, text } = props;
  return (<mark style={{ color }}>{ text }</mark>);
};

const users = [
  {
    firstName: 'Ali',
    lastName: 'Baba',
    age: '60'
  },
  {
    firstName: 'Bred',
    lastName: 'Pit',
    age: '48'
  },
  {
    firstName: 'Tom',
    lastName: 'Krus',
    age: '40'
  },
];

export const Main = () => (
  <>
    <main className="main">
      <Aside />
      <div className="content">
        <Greeting name="Oksana" />
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi assumenda at culpa cum cupiditate
          earum est ipsa minima molestias neque nisi officia, officiis omnis pariatur porro sint sit tenetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi assumenda at culpa cum cupiditate
          earum est ipsa minima molestias neque nisi officia, officiis omnis pariatur porro sint sit tenetur.
        </p>
        <br />
        <h3>Displaying Numbers Component</h3>
        <Numbers from="10" to="20" odd />
        <br />
        <h3>Displaying UsersList Component</h3>
        <UsersList users={users} />
        <Error
          text="test"
          color="red"
        />
      </div>
    </main>
  </>

);
