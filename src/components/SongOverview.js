import React from "react";
import { Component } from "react";
import SongFormContainer from "./SongFormContainer";
import SongList from "./SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        { id: 1, title: "thisisme", artist: "me", genre: "rock", rating: 5 },
        { id: 2, title: "hello", artist: "adele", genre: "jazz", rating: 3 },
      ],
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
  }

  addSong(song) {
    console.log(song);
    console.log("halo");
    this.setState((prevState) => {
      const newState = {
        songs: [
          ...prevState.songs,
          {
            id: 3,
            title: song.title,
            artist: song.artist,
            genre: song.genre,
            rating: song.rating,
          },
        ],
      };
      return newState;
    });
  }

  deleteSong(songToDelete) {
    // console.log("deleted:");
    // console.log(songToDelete);
    this.setState(() => {
      const newState = {
        songs: this.state.songs.filter((song) => {
          return song.title !== songToDelete.title;
        }),
      };
      return newState;
    });
  }

  render() {
    return (
      <div>
        <SongFormContainer addSong={this.addSong} />
        <ul className="songlist-header">
          <li>Song</li>
          <li>Artist</li>
          <li>Genre</li>
          <li>Rating</li>
        </ul>

        <SongList songs={this.state.songs} deleteSong={this.deleteSong} />
      </div>
    );
  }
}

export default SongOverview;
