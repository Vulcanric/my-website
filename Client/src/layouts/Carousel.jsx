import { useState } from "react";

const Carousel = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0); // Show item 1 first

  const goPrevItem = () => {
    // If item is the first item, go to last item
    currentItemIndex === 0
    ? setCurrentItemIndex(items.length - 1)
    : setCurrentItemIndex(prev => prev - 1);
  }

  const goNextItem = () => {
    // If item is the last item, go to first item
    currentItemIndex === items.length - 1
    ? setCurrentItemIndex(0)
    : setCurrentItemIndex(prev => prev + 1);
  }

  return (
    <div className="">
      <div className="border flex overflow-scroll relative">
      {
        items.map((item, index) => {
          return (
            <div key={index} id={index} className="border w-full h-full flex flex-col items-center gap-10 border p-10 bg-gray-200">
              <div className="rounded-4xl border w-24 h-24"></div>
              <h2>{item.name}</h2>
              <h3 className="text-2xl">
                {item.title}
              </h3>
              <p className="text-lg">
                {item.message}
              </p>
            </div>
          )
        })
      }
      </div>
      <button
        className="control hover:bg-gray-100 active:backdrop-blur-50 py-5 px-5 rounded-full text-4xl flex items-center justify-center absolute left-4"
        onClick={goPrevItem}
      >
        &#10094;
      </button>
      <button
        className="control hover:bg-gray-100 active:backdrop-blur-50 py-5 px-5 rounded-full text-4xl flex items-center justify-center absolute right-4"
        onClick={goNextItem}
      >
        &#10095;
      </button>
    </div>
  )
}

export default Carousel;