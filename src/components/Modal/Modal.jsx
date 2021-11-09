import { useEffect } from "react";

const Modal = ({ modalImage, onClick }) => {
   
  const modalEscape = e => {
    if (e.keyCode === 27) {
      onClick();
    }
  };
  
  useEffect(() => {
    window.addEventListener('keydown', modalEscape);
    return () => {
      window.removeEventListener('keydown', modalEscape);
    }
  })

  const clickBackdrop = event => {
    if (event.currentTarget === event.target) {
      onClick();
    }
  };

        return (
        <div className="Overlay" onClick={clickBackdrop}>
            <div className="Modal">
                    <img src={modalImage.largeImageURL} alt={modalImage.tags} />
            </div>
         </div>
    )
}

export default Modal;