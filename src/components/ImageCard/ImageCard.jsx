import css from './ImageCard.module.css';

const ImageCard = ({ imageInfo, openModal }) => {
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
