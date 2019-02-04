import ReactModal  from 'react-modal';
import './modal.scss';

//ReactModal.setAppElement('#app');

export const Modal = ({ isOpen, close, success, text}) => {
  const onOk = () => {
    success();
    close();
  }
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Example Modal"
    >
      <h2>Warning</h2>
      <span className="close" onClick={close}>x</span>
      <p>{text}</p>
      <div className="button-container">
        <button type="button" onClick={onOk}>Ok</button>
        <button type="button" onClick={close}>Cancel</button>
      </div>
    </ReactModal>
  );
}
