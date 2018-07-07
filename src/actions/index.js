import * as types from "./../constants/ActionTypes";
import v4 from 'uuid/v4';

const apiKey = '35d8b1f6e859a83becf304830e7267e1';

export function fetchSongId(title) {
  return function (dispatch){
    const localSongId = v4();
    title = title.replace(' ', '_');
    return fetch (`http://api.musixmatch.com/ws/1.1/track.search?&q_track=${title}&page_size=1&s_track_rating=desc&apikey=${apiKey}`)
    .then(response => response.json(), error => console.log('An error occurred', error)).then(function(json){
      console.log('Response yo', json)
    });
  };
}

export const nextLyric = (currentSongId) => ({
  type: types.NEXT_LYRIC,
  currentSongId
});

export const restartSong = (currentSongId) => ({
  type: types.RESTART_SONG,
  currentSongId
});

export const changeSong = (newSelectedSongId) => ({
  type: types.CHANGE_SONG,
  newSelectedSongId
});

export const requestSong = (title, localSongId) => ({
  type: types.REQUEST_SONG,
  title,
  songId:localSongId
});
