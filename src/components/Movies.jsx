import MovieTitle from "./MovieTitle";
import Actors from "./Actors";

export default function Movies(props) {
    console.log(props.movies);
    console.log(props.actors);
    return (
        <>
        <h1>Great Movies</h1>
        <ul>
           <MovieTitle  title={props.movies[0]} />
           <MovieTitle  title={props.movies[1]} />
           <MovieTitle  title={props.movies[2]} />
           <MovieTitle  title={props.movies[3]} />
           <Actors actor={props.actors[0]}/>
           <Actors actor={props.actors[1]}/>
           <Actors actor={props.actors[2]}/>
           <Actors actor={props.actors[3]}/>
          
        </ul>
        </>
    );
}