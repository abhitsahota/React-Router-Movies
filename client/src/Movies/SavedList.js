import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => {
        return (
          <NavLink to={`/movies/${movie.id}`} key={movie.id}>
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        );}
    )}
    <div className="home-button">
      <Link to='/'>Home</Link>
    </div>
  </div>
);

export default SavedList;
