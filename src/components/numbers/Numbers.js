import './numbers.scss';

export const Numbers = (props) => {
  const {
    from,
    to,
    odd,
    even
  } = props;
  const list = [];

  for (let i = from; i <= to; i++) {
    if (odd) {
      if (i % 2 !== 0) {
        list.push(i);
      }
    } else if (even) {
      if (i % 2 === 0) {
        list.push(i);
      }
    } else {
      list.push(i);
    }
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
