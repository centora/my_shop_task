import './toggle-hidden-box.scss';

export const ToggleHiddenBox = (props) => {
  const { visibleBoxStatus, clickHandler } = props;

  return (
    <>
      <button type="button" onClick={() => clickHandler()}>{visibleBoxStatus ? 'Hide' : 'Show'}</button>
      <div className={visibleBoxStatus ? '' : 'hidden'}>Here you can see some secret message.</div>
    </>
  );
};
