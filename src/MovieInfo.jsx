import React,{useEffect,useState} from "react";
import "./MovieInfo.css";
import axios from "axios";
import API_KEY from "./apikey"
const MovieInfo = (props) => {
  

    const[movieInfo ,setMovieinfo] = useState([])


    const selectMovie = props.selectMovie;
   
   
   console.log(selectMovie);





useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?i=${selectMovie}&apikey=${API_KEY}`)
    .then((res)=>{

        const data =(res.data);
        setMovieinfo(data)

    }).catch((err)=>{
        console.error(err);
    })
},[selectMovie]);

console.log(movieInfo)


  return (
    <>
            {
              movieInfo 

              ?

              <>
                <div className="container1">
                  <div className="coverImage">
                    <img src= {movieInfo.Poster }alt="err" />
                    </div>
                    <div className="info_column">
                      <h4 className="moviename">
                        Title : {movieInfo.Title}
                      </h4>
                      <h4 className="moviename">
                        IMDB rating :<span>{movieInfo.imdbRating}</span>
                      </h4>
                      <h4 className="moviename">
                        BoxOffice Collection :<span>{movieInfo.BoxOffice}</span>
                      </h4>
                      <h4 className="moviename">
                        Released Date :<span>{movieInfo.Released}</span>
                      </h4>
                      <h4 className="moviename">
                        Language :<span>{movieInfo.Language}</span>
                      </h4>
                      <h4 className="moviename">
                        Country :<span>{movieInfo.Country}</span>
                      </h4>
                      <h4 className="moviename">
                        Writer :<span>{movieInfo.Writer}</span>
                      </h4>
                      <h4 className="moviename">
                        Director :<span>{movieInfo.Director}</span>
                      </h4>
                      <h4 className="moviename">
                        Actors :<span>{movieInfo.Actors}</span>
                      </h4>
                      <h4 className="moviename">
                        Awards :<span>{movieInfo.Awards}</span>
                      </h4>
                    </div>
                </div>

              </>
              
              :

              <></>
              
            }
    </>
  );
};


export default MovieInfo;








































































