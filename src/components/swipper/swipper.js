import React from "react";
import './swipper.css'
import FirstPhoto from '../../images/image1.jpg'
import SecondPhoto from '../../images/amaka1.jpg'
import ThirdPhoto from '../../images/amaka2.jpg'
import FourthPhoto from '../../images/vic.jpg'



const color = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 3000;

const images= [{
    photo: FirstPhoto,
    id:1
    
   
},
{
    photo: SecondPhoto,
    id:2
    
},
{
    photo: ThirdPhoto,
    id:3
    
},
{
    photo: FourthPhoto,
    id:4
    
}

];


function Slideshow() {
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
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((backgroundImage, index) => (
          <React.Fragment key={backgroundImage.id}>
          <div
            className="swipe"
            key={backgroundImage.index}
            style={{ backgroundImage}}
          ><img src={backgroundImage.photo} alt='' style={{objectFit:'fill', height:'100%', width:'100%', borderRadius:'5px', marginTop:'0px'}}/></div></React.Fragment>
          
        ))}
      </div>

      <div className="slideshowDots">
        {color.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
