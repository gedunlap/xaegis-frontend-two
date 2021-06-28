import React from 'react'

const sports = [
    "https://i.imgur.com/Nho2KEL.jpg?1",
    "https://i.imgur.com/clqKqgr.jpg?1",
    "https://i.imgur.com/rnpLnEW.jpg?1",
    "https://i.imgur.com/WGoJBfq.jpg?1",
    "https://i.imgur.com/65l1E9w.jpg?1"
]
const delay = 5000


function Slideshow() {

    const [index, setIndex] = React.useState(0)
    const timeoutRef = React.useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    React.useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () => setIndex((prevIndex) => 
                prevIndex === sports.length -1 ? 0 : prevIndex +1
            ),
            delay
        )
        return () => {
            resetTimeout()
        }
    }, [index])

    return (
      <div className="slideshow">
        <div 
            className="slideshowSlider"
            style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}    
        >
            {sports.map((image, index) => (
                <img className="slide" 
                    key={index} 
                    src={image}
                    alt={index}
                />
            ))}
          <div className="slide"></div>
        </div>

        <div className="slideshowDots">
            {sports.map((_, idx) => (
                <div key={idx} 
                className="slideshowDot"
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {setIndex(idx)}}
                >X</div>
            ))}
        </div>
      </div>
    );
  }


export default Slideshow