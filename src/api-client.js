const baseUrl = "https://music-database-1dcdd.firebaseio.com";

const postNewSong = async () => {
  const apiURL = `${baseUrl}/songs.json`;
  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.json();
};
