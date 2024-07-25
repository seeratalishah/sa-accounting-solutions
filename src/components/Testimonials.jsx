import { useState, useEffect } from "react";
import { testimonialData } from "./data";
import TestimonialCard from "./TestimonialCard";

const getCardsPerPage = () => {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage());
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < cardsPerPage; i++) {
      const index = (activeIndex + i) % testimonialData.length;
      visibleCards.push(testimonialData[index]);
    }
    return visibleCards;
  };

  const currentCards = getVisibleCards();

  return (
    <div className="flex items-center justify-center w-full gap-1">
      <button
        onClick={handlePrev}
        className="text-blue-600 text-[42px] hover:text-blue-700"
      >
        &lt;
      </button>
      <div className="flex justify-center gap-4 w-full">
        {currentCards.map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </div>
      <button
        onClick={handleNext}
        className="text-blue-600 text-[42px] hover:text-blue-700"
      >
        &gt;
      </button>
    </div>
  );
}

export default Testimonial;
