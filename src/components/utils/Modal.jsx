import { Component } from 'react';
import css from '../styles.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  handleModalClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <>
        <div onClick={this.handleModalClick} className={css.Overlay}>
          <div className={css.Modal}>{this.props.children}</div>
        </div>
      </>
    );
  }
}

export default Modal;
