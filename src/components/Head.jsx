import axios from "axios";
import React,{useState} from "react";
import "./Movie.css";
import API_KEY from "./apikey";
import MovieContent from "./MovieContent"; 
import MovieInfo from "./MovieInfo"; 

const Head = () => {





const [searchQuary ,setsearchQuary] = useState("");
const [movieList,setMovieList] = useState([]);
const [selectMovie,setSelectMovie] = useState();
const [timeoutId,setTimeoutId] = useState();

console.log(movieList);

  const fetchData = async(searchString) =>{
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
    // console.log(responce);

    setMovieList(response.data.Search)



}

const  onTextChange =(e)=>{
  setSelectMovie("")
  clearTimeout(timeoutId);
  setsearchQuary(e.target.value);
  
  const  timeout = setTimeoutId(()=> fetchData(e.target.value),500);
  setTimeoutId(timeout);
  
  }


// console.log(typeof(selectMovie));
// console.log(selectMovie);
// console.log(searchQuary);

 
  return (
    <>
      <div className="container">
        <div className="header">
          
          <div className="appname">
            <img src="" alt="movieImg" /> Movie app
          </div>
          <div className="searchbox">
            <div className="searchicon">
              <img src="" alt="" />
              <input type="text" className="searchinput" placeholder="Search Movie" onChange ={onTextChange}  value ={searchQuary}/>
            </div>
          </div>
        </div>
        {selectMovie && <MovieInfo selectMovie={selectMovie}  />}
        <div className="movielist_container">

      {movieList?.length ? movieList.map((movie,index)=> (<MovieContent key={index} movie ={movie} setSelectMovie={setSelectMovie}/> )):"No Movie search"}
           
        </div>

      </div>
    </>
  );
};

export default Head;
