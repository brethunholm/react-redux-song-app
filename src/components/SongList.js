/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => this.props.selectSong(song)}
          >
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    ));
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songs,
  };
}

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
