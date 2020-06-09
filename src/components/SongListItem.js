import React from "react";

const SongListItem = (props) => {
  return (
    <ul className="songlist" id={props.song.id}>
      <li>{props.song.title}</li>
      <li>{props.song.artist}</li>
      <li>{props.song.genre}</li>
      <li>{props.song.rating}</li>
      <li>
        {/* <button onClick={() => props.deleteSong(props.song.id)}> */}
        <img
          onClick={() => props.deleteSong(props.song.id)}
          className="trash-icon"
          src="assets/trash.png"
          alt="trash-button"
        />
        {/* </button> */}
      </li>
    </ul>
  );
};

export default SongListItem;
