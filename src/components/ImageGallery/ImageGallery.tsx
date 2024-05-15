import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Image } from '../../models/ImageModel';
type Props = {
  gallery: Image[];
  openModal: (bigSize: string) => void;
};
const ImageGallery = ({ gallery, openModal }: Props) => {
  console.log(gallery[0]?.urls.small);
  return (
    <div className={css.galleryBox}>
      <ul className={css.galleryList}>
        {gallery.map(imageInfo => {
          return (
            <li className={css.galleryItem} key={imageInfo.id}>
              <ImageCard
                openModal={openModal}
                imageInfo={imageInfo}
              ></ImageCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
