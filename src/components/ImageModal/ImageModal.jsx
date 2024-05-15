import css from './ImageModal.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');
const ImageModal = ({ modalIsOpen, modalClose, imageUrl }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={modalClose}
      overlayClassName={css.backdrop}
      className={css.modal}
    >
      <img className={css.image} src={imageUrl} alt="big size"></img>
    </Modal>
  );
};

export default ImageModal;
