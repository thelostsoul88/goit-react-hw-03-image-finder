import css from '../styles.module.css';

const Button = ({ nextRender }) => {
  return (
    <div className={css.containerButton}>
      <button type="button" onClick={nextRender} className={css.Button}>
        Load More
      </button>
    </div>
  );
};

export default Button;
