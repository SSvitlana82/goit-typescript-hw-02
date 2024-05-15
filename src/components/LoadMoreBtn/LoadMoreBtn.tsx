import css from './LoadMoreBtn.module.css';
type Props = {
  loadMore: () => void;
};
const LoadMoreBtn = ({ loadMore }: Props) => {
  return (
    <div>
      <button onClick={loadMore} className={css.btn}>
        LOAD MORE
      </button>
    </div>
  );
};

export default LoadMoreBtn;
