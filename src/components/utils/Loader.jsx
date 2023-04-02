import { Triangle } from 'react-loader-spinner';
import css from '../styles.module.css';

const Loader = () => {
  return (
    <div className={css.Loader}>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default Loader;
