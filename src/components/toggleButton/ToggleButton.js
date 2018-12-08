import './toggle-button.scss';

export const ToggleButton = (props) => {
  const { activeState, clickHandler } = props;
  return (
    <button type="button" className={activeState ? 'active' : ''} onClick={() => clickHandler()}>Toggle Active</button>
  );
};
