import React from "react";

const SongFormComponent = (props) => {
  return (
    <form className="input-form" onSubmit={props.handleSubmit}>
      <input
        name="title"
        type="text"
        value={props.data.title}
        placeholder="Title"
        onChange={props.handleChange}
      />
      <br />
      <input
        name="artist"
        type="text"
        value={props.data.artist}
        placeholder="Artist"
        onChange={props.handleChange}
      />
      <br />
      <select
        name="genre"
        value={props.data.genre}
        onChange={props.handleChange}
      >
        <option value="" disabled>
          Select a genre
        </option>
        <option value="Blues">Blues</option>
        <option value="Classical">Classical</option>
        <option value="Country">Country</option>
        <option value="Electronic">Electronic</option>
        <option value="Jazz">Jazz</option>
        <option value="Funk">Funk</option>
        <option value="Hiphop">Hiphop</option>
        <option value="Indi">Indi</option>
        <option value="Latin">Latin</option>
        <option value="Metal">Metal</option>
        <option value="Polka">Polka</option>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
        <option value="Raggae">Raggae</option>
        <option value="R&B">R&B</option>
        <option value="Soul">Soul</option>
      </select>
      <br />
      <select
        name="rating"
        value={props.data.rating}
        onChange={props.handleChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button>Submit</button>
    </form>
  );
};

export default SongFormComponent;
