import React, { Component } from 'react';
import giphy from 'giphy-api';

import ReactDOM from 'react-dom';
import Gif from './components/gif';
import GifList from './components/gif_list';
import SearchBar from './components/search_bar';

import '../assets/stylesheets/application.scss';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedGif: null,
      gifs: []
    }
  }

  selectGif = (id) => {
    this.setState({
      selectedGif: id
    })
  }

  search = (query) => {
    giphy({ apiKey: 'eZ0XhlzuA5IkijSGuBBw03hH1T8lY6sI', https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }


  render() {
    return (
      <div className="app">
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGif}/>
          </div>
        </div>
        <div className="right-scene" >
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    )
  }
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
