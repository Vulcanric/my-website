import { useRef, useState } from "react";

const Carousel = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0); // Show item 1 first
  const slideContainerRef = useRef(null);

  const goPrevItem = () => {
    // If item is the first item, go to last item
    currentItemIndex === 0
    ? setCurrentItemIndex(items.length - 1)
    : setCurrentItemIndex(prev => prev - 1);
    displayItem(currentItemIndex);
  }

  const goNextItem = () => {
    // If item is the last item, go to first item
    currentItemIndex === items.length - 1
    ? setCurrentItemIndex(0)
    : setCurrentItemIndex(prev => prev + 1);
    displayItem(currentItemIndex);
  }

  function displayItem(itemIndex) {
    /* Present slide identified by id(itemIndex) within slide-container
    by navigating to slide using scroll API */
    /* Scroll-navigate to item in items-list using items uniform width * by item position in the list */
    const slideContainer = slideContainerRef.current;
    const slidesRect = document.getElementById(itemIndex).getBoundingClientRect();
    slideContainer.scrollTo(slidesRect.width * itemIndex, 0);  // Only navigate horizontally
  }

  return (
    <div className="flex items-center sm:w-full md:w-1/2 relative">
      <div ref={slideContainerRef} className="w-full h-full flex overflow-hidden">
      {
        items.map((item, index) => {
          return (
            <div key={index} id={index} className="min-w-full h-full flex flex-col items-center p-10">
              <div className="rounded-full flex items-center justify-center w-20 h-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-12 h-12"
                ><path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/></svg>
              </div>
              <br />
              <h2 className="text-2xl whitespace-nowrap mb-2">{item.name}</h2>
              <h3 className="text-lg whitespace-nowrap">{item.title}</h3>
              <br />
              <p className="text-center text-pretty">{item.message}</p>
            </div>
          )
        })
      }
      </div>
      <button
        className="slide-control hover:bg-gray-50 p-5 rounded-full text-4xl absolute left-0"
        onClick={goPrevItem}
      >
        &#10094;
      </button>
      <button
        className="slide-control hover:bg-gray-50 p-5 rounded-full text-4xl absolute right-0"
        onClick={goNextItem}
      >
        &#10095;
      </button>
    </div>
  )
}

export default Carousel;
