import { Aside } from '../aside';
import { Greeting } from '../greeting';
import { Numbers } from '../numbers';
import './main.scss';

const Error = (props) => {
  const { color, text } = props;
  return (<mark style={{ color }}>{ text }</mark>);
};

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
        <Error
          text="test"
          color="red"
        />
      </div>
    </main>
  </>

);
