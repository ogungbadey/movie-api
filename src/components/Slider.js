export default function Slider({
  listRef,
  trending,
  imgUrl,
  posterSize,
  controls
}) {
  const { prevSlide, nextSlide } = controls;
  return (
    <div className="Slider-Wrapper">
      <div
        style={{
          width: "975px",
          height: "200px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <ul
          ref={listRef}
          style={{
            display: "flex",
            width: "fit-content",
            height: "100%"
          }}
        >
          {trending.map((movie, i) => {
            return (
              <li
                style={{
                  backgroundColor: "grey",
                  width: "150px",
                  height: "200px",
                  margin: "0 10px",
                  color: "#111",
                  cursor: "pointer",
                  border: "2px solid"
                }}
                key={i}
              >
                {/* <h3>{movies.title}</h3> */}
                <img
                  style={{
                    height: "100%",
                    width: "150px",
                    objectFit: "cover"
                    // overflow: "hidden"
                  }}
                  alt="poster"
                  src={imgUrl + "/" + posterSize + "/" + movie.poster_path}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={() => prevSlide()} className="Btn Btn-Left">
        Prev
      </button>
      <button onClick={() => nextSlide()} className="Btn Btn-Right">
        Next
      </button>
    </div>
  );
}
