// Action creator

export const selectSong = (song) =>
  // return an action
  ({
    type: 'SONG_SELECTED',
    payload: song,
  });
