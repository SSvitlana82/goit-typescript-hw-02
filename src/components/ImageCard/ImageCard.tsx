import css from './ImageCard.module.css';
import { Image } from '../../models/ImageModel';
type Props = {
  imageInfo: Image;
  openModal: (bigSize: string) => void;
};

const ImageCard = ({ imageInfo, openModal }: Props) => {
  return (
    <div>
      <div>
        <img
          className={css.item}
          src={imageInfo.urls.small}
          alt={imageInfo.description}
          onClick={() => {
            openModal(imageInfo.urls.regular);
          }}
        />
      </div>
    </div>
  );
};

export default ImageCard;
