import React from "react";
import { Component } from "react";
import SongFormContainer from "./SongFormContainer";
import SongList from "./SongList";
import SongListHeader from "./SongListHeader";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.getSongs = this.getSongs.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.sort = this.sort.bind(this);
  }

  async getSongs() {
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
      })
      .catch((error) => console.log(error));
    console.log(this.state);
  }

  async componentDidMount() {
    this.getSongs();
  }

  addSong(song) {
    const data = {
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      rating: song.rating,
    };
    const request = {
      method: "POST",
      body: JSON.stringify(data),
    };
    fetch("https://music-database-1dcdd.firebaseio.com/songs.json", request)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.getSongs();
      })
      .catch((error) => console.log(error));
    this.toggleForm();
  }

  deleteSong(id) {
    const baseUrl = "https://music-database-1dcdd.firebaseio.com";
    const apiUrl = `${baseUrl}/songs/${id}.json`;
    fetch(apiUrl, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.getSongs();
      })
      .catch((error) => console.log(error));
  }

  toggleForm() {
    const inputForm = document.getElementsByClassName("input-form")[0];
    inputForm.classList.toggle("input-form-show");
  }

  sort(type, direction) {
    console.log(type, direction);
    const songs = [...this.state.songs];
    const sortedArray =
      type === "title"
        ? direction === "down"
          ? songs.sort((a, b) => a.title.localeCompare(b.title))
          : songs.sort((a, b) => b.title.localeCompare(a.title))
        : type === "artist"
        ? direction === "down"
          ? songs.sort((a, b) => a.artist.localeCompare(b.artist))
          : songs.sort((a, b) => b.artist.localeCompare(a.artist))
        : type === "rating"
        ? direction === "down"
          ? songs.sort((a, b) => a.rating.localeCompare(b.rating))
          : songs.sort((a, b) => b.rating.localeCompare(a.rating))
        : null;
    console.log(sortedArray);
    this.setState({ songs: sortedArray });
  }

  render() {
    return (
      <div>
        <div className="header-container">
          <span className="h1">Songlist</span>
          <button className="add-song-button" onClick={this.toggleForm}>
            Add a song
          </button>
        </div>
        <SongFormContainer addSong={this.addSong} />
        <SongListHeader sort={this.sort} />
        <SongList songs={this.state.songs} deleteSong={this.deleteSong} />
      </div>
    );
  }
}

export default SongOverview;
