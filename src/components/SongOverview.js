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
      isLoading: true,
      filter: "",
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.getSongs = this.getSongs.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.sortList = this.sortList.bind(this);
    this.selectFilter = this.selectFilter.bind(this);
    this.getFilteredSongs = this.getFilteredSongs.bind(this);
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
      })
      .catch((error) => console.log(error));
    this.setState({ isLoading: false });
  }

  async componentDidMount() {
    this.getSongs();
  }

  getFilteredSongs(genre) {
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
        const filteredSongs = result.filter((song) => {
          return song.genre === genre;
        });
        this.setState({ songs: filteredSongs });
      })
      .catch((error) => console.log(error));
    this.setState({ isLoading: false });
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
        this.getSongs();
      })
      .catch((error) => console.log(error));
    // Hide the form after submit
    this.toggleForm();
  }

  deleteSong(id) {
    const baseUrl = "https://music-database-1dcdd.firebaseio.com";
    const apiUrl = `${baseUrl}/songs/${id}.json`;
    fetch(apiUrl, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        this.getSongs();
      })
      .catch((error) => console.log(error));
  }

  sortList(type, direction) {
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
    this.setState({ songs: sortedArray });
  }

  selectFilter(event) {
    const { name, value } = event.target;
    this.setState(() => {
      const newState = { [name]: value };
      return newState;
    });
    const filter = value;
    filter === "All" ? this.getSongs() : this.getFilteredSongs(filter);
  }

  toggleForm() {
    const inputForm = document.getElementsByClassName("input-form")[0];
    inputForm.classList.toggle("input-form-show");
    const button = document.getElementsByClassName("add-song-button")[0];
    button.classList.toggle("add-song-button-hide");
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
        <SongListHeader
          sort={this.sortList}
          filter={this.state.filter}
          selectFilter={this.selectFilter}
        />
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <SongList songs={this.state.songs} deleteSong={this.deleteSong} />
        )}
      </div>
    );
  }
}

export default SongOverview;
