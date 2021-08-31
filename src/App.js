import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import TopRatedList from "./components/TopRatedList";
import Home from "./Home";
import instance from "./instance";
import Movie from "./Movie";
import "./styles.css";

export default function App() {

  const [imgUrl, setImgUrl] = useState("");
  const [posterSize, setPosterSize] = useState("");
  const [trending, setTrending] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    instance.get("configuration").then((res) => {
      console.log(res.data);
      setImgUrl(res.data.images.base_url);
      setPosterSize(res.data.images.poster_sizes[1]);
    });
    instance
      .get("trending/all/week")
      .then((res) => {
        setTrending(res.data.results);
      })
      .catch((err) => console.log(err));
    instance.get("movie/top_rated").then((res) => {
      // console.log(res.data);
      setTopRatedMovies(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div
        style={{
          display: "flex",
        }}
      >
        <Switch>
          <Route path="/movies/:id">
            <Movie/>
          </Route>
          <Route exact path="/">
            <Home
              imgUrl={imgUrl}
              topRatedMovies={topRatedMovies}
              posterSize={posterSize}
              trending={trending}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
