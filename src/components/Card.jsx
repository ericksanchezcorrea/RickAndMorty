import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { _addToFavorites, _removeToFavorites } from '../redux/actions';

function Card({ onClose, name, species, image, gender, id, addToFavorites, removeToFavorites, myFavorites }) {
  const [isFav, setIsFav] = useState(false);
  // comentario

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  const handleFavorite = () => {
    if (isFav) {
      removeToFavorites(id);
      setIsFav(false);
    } else {
      addToFavorites(id);
      setIsFav(true);
    }
  };

  return (
    <div className="card_wrapper">
      
      <div className='container_buttons'>
         <button className='button_x' onClick={onClose}>X</button>
         <button className='button_3' onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>   
      </div>


      <Link to={`/detail/${id}`}>
        <h5 className="card-title">{name}</h5>
      </Link>

      <h3>Especie: {species}</h3>
      <h3>Género: {gender}</h3>

      {image ? (
        <img src={image} alt="imagen" />
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = {
  addToFavorites: _addToFavorites,
  removeToFavorites: _removeToFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
