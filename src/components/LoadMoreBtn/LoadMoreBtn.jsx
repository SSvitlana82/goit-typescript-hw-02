import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div>
      <button onClick={loadMore} className={css.btn}>
        LOAD MORE
      </button>
    </div>
  );
};

export default LoadMoreBtn;
