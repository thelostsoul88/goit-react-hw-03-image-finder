import { Component } from 'react';
import Searchbar from './search/Searchbar';
import ImageGallery from './image/ImageGallery';

export default class App extends Component {
  state = {
    searchImg: '',
  };

  createSearchImg = value => {
    this.setState({ searchImg: value });
  };

  render() {
    return (
      <>
        <Searchbar createSearchImg={this.createSearchImg} />
        <ImageGallery value={this.state.searchImg} />
      </>
    );
  }
}
