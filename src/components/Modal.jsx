import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => document.body.classList.remove('overflow-hidden');
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 bg-white p-10">
        <div className="flex h-full flex-col justify-between">
          {children}
          <div className="flex items-center justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,

    document.querySelector('.modal-container')
  );
}

export default Modal;
