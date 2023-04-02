import { Component } from 'react';
import Notiflix from 'notiflix';
import css from '../styles.module.css';
import Search from 'components/utils/_Search';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      Notiflix.Notify.failure('Enter smth to search.');
      return;
    }
    this.props.createSearchImg(this.state.value.toLowerCase().trim());
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <Search />
          </button>
          <input
            type="text"
            placeholder=" Search"
            value={value}
            onChange={this.handleChange}
            className={css.SearchFormInput}
            autoComplete="off"
          />
        </form>
      </div>
    );
  }
}
