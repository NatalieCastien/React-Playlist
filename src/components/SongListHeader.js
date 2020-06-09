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
        Artist
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
      <li>Genre</li>
      <li>
        Rating
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
