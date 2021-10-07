import "./Section.css";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = ({ category, images }) => {
  const altMovies = (str) => {
    let array = str.split("/");
    let altStr = array[array.length - 1];
    return altStr;
  };

  const scroll = useRef();

  const slide = (shift) => {
    scroll.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    //For checking if the scroll has ended
    if (Math.floor(scroll.current.scrollWidth - scroll.current.scrollLeft) <= scroll.current.offsetWidth) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scroll.current.scrollLeft);
    if (Math.floor(scroll.current.scrollWidth - scroll.current.scrollLeft) <= scroll.current.offsetWidth) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  return (
    <div className="container-section">
      <h1>{category}</h1>

      <div className="section" ref={scroll} onScroll={scrollCheck}>
        {images.map((image, index) => {
          return <img key={index} src={image} alt={altMovies(image)} />;
        })}
      </div>
      {scrollX !== 0 && (
        <button id="prev" className="prev" onClick={() => slide(-1260)}>
          <FontAwesomeIcon icon="chevron-left" />
        </button>
      )}
      {!scrolEnd && (
        <button id="next" className="next" onClick={() => slide(+1260)}>
          <FontAwesomeIcon icon="chevron-right" />
        </button>
      )}
    </div>
  );
};

export default Section;
