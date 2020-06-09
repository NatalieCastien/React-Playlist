import React from "react";
import SongFormComponent from "./SongFormComponent";

class SongFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      artist: "",
      genre: "",
      rating: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(() => {
      const newState = { [name]: value };
      return newState;
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addSong(this.state);
    this.setState({
      title: "",
      artist: "",
      genre: "",
      rating: "",
    });
  }

  render() {
    return (
      <SongFormComponent
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        data={this.state}
      />
    );
  }
}

export default SongFormContainer;
