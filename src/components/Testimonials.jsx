import { useState } from "react";
import { testimonialData } from "./data";
import TestimonialCard from "./TestimonialCard";

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonialData.length / cardsPerPage);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const getCardsPerPage = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const cardsPerPageResponsive = getCardsPerPage();
  const startIndex = activeIndex * cardsPerPageResponsive;
  const endIndex = startIndex + cardsPerPageResponsive;
  const currentCards = testimonialData.slice(startIndex, endIndex);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-between items-center w-full">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
        >
          &lt;
        </button>
        <div className="flex w-full justify-center space-x-4">
          {currentCards.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
