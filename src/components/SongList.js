import React from "react";
import SongListItem from "./SongListItem";

const SongList = (props) => {
  const songArray = props.songs.map((song) => (
    <SongListItem
      key={song.id}
      id={song.id}
      song={song}
      deleteSong={props.deleteSong}
    />
  ));
  return <div>{songArray}</div>;
};

export default SongList;
