import React from "react";
import './sectionthree.css'
import ThreeSlideOne from "./ThreeSlideOne";
import ThreeSlideThree from "./ThreeSlideThree";
import ThreeSlideTwo from "./ThreeSlideTwo";




const delay = 8000;

const Sections= [
 
  <ThreeSlideOne></ThreeSlideOne>,
  <ThreeSlideTwo></ThreeSlideTwo>,
  <ThreeSlideThree></ThreeSlideThree>

];


function SectionThree() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Sections.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="threeslideshow">
      <div
        className="threeslideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {Sections.map((section, index) => (
          <React.Fragment key={section.id}>
          <div
            className="threeswipe"
            key={section.index}
          
          >
           {section}
          </div></React.Fragment>
          
        ))}
      </div>

    </div>
  );
}

export default SectionThree;
