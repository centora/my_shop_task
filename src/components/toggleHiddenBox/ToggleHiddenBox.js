import './toggle-hidden-box.scss';

export const ToggleHiddenBox = (props) => {
  const { visibleBoxStatus, clickHandler } = props;

  return (
    <div className="flex-container align-items-center">
      <button type="button" onClick={() => clickHandler()}>{visibleBoxStatus ? 'Hide' : 'Show'}</button>&nbsp;&nbsp;
      <div className={visibleBoxStatus ? '' : 'hidden'}>Here you can see some secret message.</div>
    </div>
  );
};
