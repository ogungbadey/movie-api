import { Link } from "react-router-dom";
import "./styles/TopRatedList.css";
export default function TopRatedList({ imgUrl, posterSize, topRated }) {
  return (
    <ul className="TopList">

      {topRated.map((movie, i) => {
        const url = "/movies/" + movie.id
        return (
          
          <li key={movie.id}>
            <Link to={url}>
            <div> 
              <div>
                <img
                  style={{
                    height: "100%",
                    width: "154px",
                    objectFit: "contain",
                    border: "2px solid"
                    // overflow: "hidden"
                  }}
                  alt="poster"
                  src={imgUrl + "/" + posterSize + "/" + movie.poster_path}
                />
              </div>
              <div>
                <div>
                  <p>{movie.title}</p>
                  <p>{movie.vote_average}</p>
                </div>
                <div>
                  <button>add to watchlist</button>
                </div>
              </div>
            </div>
            </Link>
            
          </li>
        );
      })}
    </ul>
  );
}
