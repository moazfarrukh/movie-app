import React from 'react'
import "../styles/MovieCard.css"
import { Link } from 'react-router-dom';
interface MovieCardProps{
    id:number
    imageUrl:string;
    name:string;
    rating:number
}
function MovieCard({id,imageUrl,name,rating}:MovieCardProps) {
  return (
       
       <article className="card">
        <Link to={`/Movie/${id}`}>
       <img className="card-img" src={`https://image.tmdb.org/t/p/original${imageUrl}`}  alt={name} />
       </Link>
       <div className="content">
           <p>{name}</p>
           <p>Rating: {rating.toFixed(2)}</p>
       </div>
   </article>
           
  )
}

export default MovieCard