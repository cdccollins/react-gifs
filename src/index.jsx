import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gif from './components/gif';
import GifList from './components/gif_list';
import SearchBar from './components/search_bar';

import '../assets/stylesheets/application.scss';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedGif: "" ,
      gifs: []
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    var xhr = fetch(`http://api.giphy.com/v1/gifs/search?q=${event.target.value}&api_key=eZ0XhlzuA5IkijSGuBBw03hH1T8lY6sI&limit=10`).then(response => response.json()).then((gifs) => {
      this.setState({
        gifs: gifs.data
      });
    });;
  }


  render() {
    return (
      <div className="app">
        <div className="left-scene">
          <div className="form-search form-control" onChange={this.handleChange} >
            <SearchBar />
          </div>
          <div className="selected-gif">
            <Gif id={this.state.selectedGif}/>
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs}/>
          </div>
        </div>
      </div>
    )
  }
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
