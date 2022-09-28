import React from "react";
import "./MovieContent.css";
const MovieContent = (props) => {

    const { Title,Year,imdbID,Type,Poster}= props.movie;

  // console.log(props.movie.imdbID) 

  const sendVal = () =>{
    props.setSelectMovie(imdbID);
  }
    
  return (
    <>
      <div className="movie_container" onClick={sendVal}>
        
        <img src={Poster} alt=""/>

        <h2>{Title}</h2>

        <div className="info_column">
            
          <span className="movieInfo">Year :{Year}</span>
          <span className="movieInfo">type:{Type}</span>
        </div>
      </div>

    </>
  );
};

export default MovieContent;
