import React from "react";

const SongListItem = (props) => {
  // Show stars for the rating
  let stars = [];
  const ratingStars = parseInt(props.song.rating);
  for (let i = 0; i < ratingStars; i++) {
    stars.push(<img className="star" src="assets/star-icon.png" alt="star" />);
  }

  return (
    <ul className="songlist" id={props.song.id}>
      <li>{props.song.title}</li>
      <li>{props.song.artist}</li>
      <li>{props.song.genre}</li>
      <li>{stars}</li>
      <li>
        <img
          onClick={() => props.deleteSong(props.song.id)}
          className="trash-icon"
          src="assets/trash.png"
          alt="trash-button"
        />
      </li>
    </ul>
  );
};

export default SongListItem;
