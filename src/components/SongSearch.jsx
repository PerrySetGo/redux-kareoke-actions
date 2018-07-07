import React from 'react';
import { fetchSongId } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

<<<<<<< HEAD

=======
>>>>>>> 4_0f_redux_thunk_middleware
function SongSearch({ dispatch }){
  let input;
  return (
    <div>
<<<<<<< HEAD
    <form onSubmit={e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      dispatch(fetchSongId(input.value.trim()))
      // ...we'll add more custom logic here later...
      console.log('SEARCHED TITLE:');
      console.log(input.value.trim());
      //...instead of these console.log()s....
      input.value = '';
    }}>
    <input placeholder="Song Title" ref={node => {
      input = node;
    }}></input>
    <button>Search</button>
    </form>
=======
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchSongId(input.value.trim()));
        // ...we'll add more custom logic here later...
        console.log('SEARCHED TITLE:');
        console.log(input.value.trim());
        //...instead of these console.log()s....
        input.value = '';
      }}>
        <input placeholder="Song Title" value='crocodile rock' ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>
>>>>>>> 4_0f_redux_thunk_middleware
    </div>
  );
}

SongSearch.propTypes = {
<<<<<<< HEAD
  dispatch:PropTypes.func
=======
  dispatch: PropTypes.func
>>>>>>> 4_0f_redux_thunk_middleware
};

export default connect()(SongSearch);
