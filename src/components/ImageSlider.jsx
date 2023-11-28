import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0JTIwaG90ZWwlMjBmb29kfGVufDB8fDB8fHww",
      title: "Breakfast",
    },
    {
      url: "https://images.unsplash.com/photo-1535567465397-7523840f2ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEx1bmNoJTIwaG90ZWwlMjBmb29kfGVufDB8fDB8fHww",
      title: "Lunch",
    },
    {
      url: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VwcGVyJTIwaG90ZWwlMjBmb29kfGVufDB8fDB8fHww",
      title: "Supper",
    },
    {
      url: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGlubmVyJTIwaG90ZWwlMjBmb29kfGVufDB8fDB8fHww",
      title: "Dinner",
    },
    {
      url: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxldmVuc2VzJTIwaG90ZWwlMjBmb29kfGVufDB8fDB8fHww",
      title: "Elevenses",
    },
    {
      url: "https://images.unsplash.com/photo-1491273289208-9340cb42e5d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJ1bmNoJTIwaG90ZWwlMjBmb29kfGVufDB8fDB8fHww",
      title: "Brunch",
    },
    {
      url: "https://images.unsplash.com/photo-1464306208223-e0b4495a5553?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VGVhJTIwaG90ZWwlMjBmb29kfGVufDB8fDB8fHww",
      title: "Tea",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center duration-500 bg-cover"
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>

      {/*Right Arrow */}
      <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
