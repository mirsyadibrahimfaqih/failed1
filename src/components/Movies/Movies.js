import React, { useState } from "react";
import Movie from "../Movie/Movie";
import DataMovie from "../../utils/constants/DataMovie";
import styled from "styled-components";

const Movies = (props) => {

   const {item, title} = props



    return (
  <MoviesStyles>
          <div className="container">
        <section className="movies">
            <h2 className="movies__title">{title}</h2>
            <div className="movie__container">
            {
                item.map(function(data){
                return(
                   
                    item.map((data) => <Movie key ={data.id} item={data}/>)
                    
                )
                })
            }
            </div>
        </section>
        </div>
  </MoviesStyles>
    )
}

const MoviesStyles = styled.div`
/*small screen */
.container {
    margin: 1rem;
}

.movies {
    margin: 5rem 0;
    text-align: center;
}

.movies__title {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #4361ee;
}
.movie__container {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    .movie__container {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
    }

}

@media (min-width:992px) {
    .container {
        max-width: 1200px;
        margin: 3rem auto;
    }
    .movie {
        flex-basis: 25%;
        padding: 1rem;
    }
}
`
export default Movies;