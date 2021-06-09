import { combineReducers } from 'redux';

const songsReducer = () => [
  { title: 'Oops!...I Did it Again', duration: '4:05' },
  { title: 'Womanizer', duration: '2:30' },
  { title: 'Toxic', duration: '2:05' },
  { title: 'Stronger', duration: '3:00' },
  { title: 'Slave For You', duration: '1:45' },
];

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
