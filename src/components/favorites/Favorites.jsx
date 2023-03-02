import React from 'react'
import { connect } from "react-redux";

function Favorites({myFavorites}) {

    console.log(myFavorites)
  return (

    <div className='favorites_wrapper'>
        <h1>My favorites</h1>
        
        <div className='card_container'>
            {
                myFavorites &&
                myFavorites.map(el => (
                    <div className='favorite_Card'>
                        <h3>Name: {el.name}</h3>
                        <img src={el.image} alt={el.name} />
                        <h3>Gender: {el.gender}</h3>
                    </div>
                ))
            }
        </div>
    </div>
  )
}


const mapStateToProps = state => ({
    myFavorites: state.myFavorites,
  });

  export default connect(mapStateToProps, null)(Favorites);