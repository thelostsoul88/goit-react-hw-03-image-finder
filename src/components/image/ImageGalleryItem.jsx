import { Component } from 'react';
import css from '../styles.module.css';
import Modal from 'components/utils/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    isModalShow: false,
  };

  handleModal = () => {
    this.setState(({ isModalShow }) => ({
      isModalShow: !isModalShow,
    }));
  };

  render() {
    const { webURL, largeURL, tags } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={webURL}
          alt={tags}
          onClick={this.handleModal}
          className={css.ImageGalleryItemImage}
        />
        {this.state.isModalShow && (
          <Modal onClose={this.handleModal}>
            <img src={largeURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}
