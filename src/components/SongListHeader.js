import React from "react";

const SongListHeader = (props) => {
  return (
    <ul className="songlist-header">
      <li>
        <span>Title</span>
        <img
          onClick={() => props.sort("title", "down")}
          className="arrow"
          src="assets/arrow-down.png"
        />
        <img
          onClick={() => props.sort("title", "up")}
          className="arrow"
          src="assets/arrow-up.png"
        />
      </li>
      <li>
        <span>Artist</span>
        <img
          onClick={() => props.sort("artist", "down")}
          className="arrow"
          src="assets/arrow-down.png"
        />
        <img
          onClick={() => props.sort("artist", "up")}
          className="arrow"
          src="assets/arrow-up.png"
        />
      </li>
      <li>
        <select
          className="filter-select"
          name="filter"
          value={props.filter}
          onChange={props.selectFilter}
        >
          <option defaultValue value="" disabled>
            Genre
          </option>
          <option value="All">All</option>
          <option value="Blues">Blues</option>
          <option value="Classical">Classical</option>
          <option value="Country">Country</option>
          <option value="Electronic">Electronic</option>
          <option value="Jazz">Jazz</option>
          <option value="Folk">Folk</option>
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
      </li>
      <li>
        <span>Rating</span>
        <img
          onClick={() => props.sort("rating", "down")}
          className="arrow"
          src="assets/arrow-down.png"
        />
        <img
          onClick={() => props.sort("rating", "up")}
          className="arrow"
          src="assets/arrow-up.png"
        />
      </li>
    </ul>
  );
};

export default SongListHeader;
