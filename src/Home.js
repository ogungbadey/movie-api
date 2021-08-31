import React, { useRef } from 'react'
import Slider from './components/Slider'
import TopRatedList from './components/TopRatedList';

export default function Home({trending, posterSize, imgUrl, topRatedMovies}) {
    const listRef= useRef()
    let counter = 0;
    const nextSlide = () => {
        if (counter > trending.length - 1) return;
        counter++;
        listRef.current.style.transitionDuration = "0.5s";
        listRef.current.style.transform = `translate(-${350 * counter}px)`;
      };
    
      const prevSlide = () => {
        if (counter < 0) return;
        counter--;
        listRef.current.style.transitionDuration = "0.5s";
        listRef.current.style.transform = `translate(-${350 * counter}px)`;
      };
    return (
        <div>
            {trending.length > 0 ? (
          <div
            style={{
              flex: "1 1 65%"
            }}
          >
            <Slider
              controls={{
                prevSlide,
                nextSlide
              }}
              trending={trending}
              listRef={listRef}
              imgUrl={imgUrl}
              posterSize={posterSize}
            />
            <div>
              <div>
                <h1>Top Rated Movies</h1>
                <TopRatedList
                  posterSize={posterSize}
                  imgUrl={imgUrl}
                  topRated={topRatedMovies}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3>Loading trends</h3>
          </div>
        )}
        <div
          style={{
            flex: "1 1 25%"
          }}
        >
          To the right but with more content
        </div>    
        </div>
    )
}
