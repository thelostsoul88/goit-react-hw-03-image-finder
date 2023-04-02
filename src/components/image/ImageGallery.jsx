import Notiflix from 'notiflix';
import css from '../styles.module.css';
import fetchImg from 'components/services/api';
import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from '../utils/Loader';
import Button from 'components/utils/Button';

const INITIAL_STATE = {
  imagesArr: [],
  page: 1,
  error: null,
  isLoading: false,
  disabled: false,
};

export default class ImageGallery extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidUpdate(prevProps, prevState) {
    const value = this.props.value;

    if (
      value === prevProps.value &&
      this.state.page !== prevState.page &&
      this.state.page === 1
    ) {
      this.handleFetch();
    }

    if (value !== prevProps.value && this.state.page !== 1) {
      this.setState({ imagesArr: [], page: 1 });
    }

    if (prevProps.value !== value && this.state.page === 1) {
      this.setState({ imagesArr: [], isLoading: true, page: 1 });
      this.handleFetch();
    }

    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.setState({ isLoading: true });
      this.handleFetch();
    }
  }

  handleFetch = async () => {
    try {
      this.setState({ isLoading: true, disabled: false });

      const newArr = await fetchImg(this.state.page, this.props.value);

      if (newArr.length === 0) {
        Notiflix.Notify.info('There are no images for your request.');
        this.setState({
          ...INITIAL_STATE,
        });
        return;
      }

      if (newArr.length === 12) {
        this.setState({ disabled: true });
      } else {
        this.setState({ disabled: false });
      }

      this.setState(({ imagesArr }) => ({
        imagesArr: [...imagesArr, ...newArr],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({
        error: true,
      });
    }
  };

  nextRender = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { imagesArr, isLoading, disabled, error } = this.state;
    return (
      <>
        <ul className={css.ImageGallery}>
          {imagesArr.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webURL={webformatURL}
              largeURL={largeImageURL}
              tags={tags}
              toggleModal={this.toggleModal}
            />
          ))}
        </ul>
        {isLoading && <Loader />}
        {disabled && <Button nextRender={this.nextRender} />}
        {error && Notiflix.Notify.warning('Search error. Restart pls.')}
      </>
    );
  }
}
