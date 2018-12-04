import './greeting.scss';

export const Greeting = (props) => {
  const { name } = props;
  let greetText = '';
  const date = new Date();
  const currTime = date.getHours();

  if (currTime > 22 && currTime <= 3) {
    greetText = 'Good night';
  } else if (currTime > 3 && currTime <= 12) {
    greetText = 'Good morning';
  } else if (currTime > 12 && currTime <= 18) {
    greetText = 'Good afternoon';
  } else {
    greetText = 'Good evening';
  }

  const greetMessage = name ? `${greetText}, ${name}!` : `${greetText}!`;

  return (
    <div className="greeting">{ greetMessage }</div>
  );
};
