import React from "react";
import { Component } from "react";
import SongFormContainer from "./SongFormContainer";
import SongList from "./SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.getSongs = this.getSongs.bind(this);
  }

  getSongs() {
    fetch("https://music-database-1dcdd.firebaseio.com/songs.json")
      .then((response) => response.json())
      .then((data) => {
        const result = Object.keys(data).map((key) => ({
          id: key,
          title: data[key].title,
          artist: data[key].artist,
          genre: data[key].genre,
          rating: data[key].rating,
        }));
        this.setState({ songs: result });
        console.log(result);
      });
    console.log(this.state);
  }

  componentDidMount() {
    this.getSongs();
  }

  addSong(song) {
    console.log(song);
    console.log("halo");
    const data = {
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      rating: song.rating,
    };
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
    };
    fetch(
      "https://music-database-1dcdd.firebaseio.com/songs.json",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    this.getSongs();
  }

  deleteSong(id) {
    // console.log("deleted:");
    // console.log(songToDelete);

    const baseUrl = "https://music-database-1dcdd.firebaseio.com";
    const apiUrl = `${baseUrl}/songs/${id}.json`;
    fetch(apiUrl, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.getSongs();
      });

    // this.setState(() => {
    //   const newState = {
    //     songs: this.state.songs.filter((song) => {
    //       return song.title !== songToDelete.title;
    //     }),
    //   };
    //   return newState;
    // });
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
