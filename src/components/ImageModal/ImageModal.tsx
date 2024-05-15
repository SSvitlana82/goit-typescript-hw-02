import css from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');
type Props = {
  modalIsOpen: boolean;
  modalClose: () => void;
  imageUrl: string;
};
const ImageModal = ({ modalIsOpen, modalClose, imageUrl }: Props) => {
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
