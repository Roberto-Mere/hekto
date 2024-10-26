import { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="left-1/2 top-1/2 h-5/6 w-5/6 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-large backdrop:bg-black backdrop:opacity-50"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <div className="relative flex items-center justify-center">
        <button
          className="absolute right-24 top-4 cursor-pointer border-none bg-transparent text-h1"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
