import React, { Component } from 'react';
import Gif from './gif'

class GifList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="">
        {this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />)}
      </div>
    )
  }
}

export default GifList;
