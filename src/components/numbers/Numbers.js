import './numbers.scss';

export const Numbers = (props) => {
  const {
    from,
    to,
    odd,
    even
  } = props;
  let list = [];
  for (let i = from; i <= to; i++) {
    list.push(i);
  }

  if (odd) {
    list = list.filter(num => num % 2 !== 0);
  }
  if (even) {
    list = list.filter(num => num % 2 === 0);
  }

  return (
    <div className="numbers">
      <ul>
        {
          list.map((item, index) => (<li key={index}>{ item }</li>))
        }
      </ul>
    </div>
  );
};
