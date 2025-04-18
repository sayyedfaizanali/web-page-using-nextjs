"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Khushbu Parveen",
    position: "CEO at Company",
    quote: "Bahut acha hai product.",
    image: "/images/woman.png",
  },
  {
    name: "Arjun Kumar",
    position: "CTO at Startup",
    quote: "10 din se khaa raha hu kafi acha result laga mujhe.",
    image: "/images/man.png",
  },
  {
    name: "Suresh Borker",
    position: "Freelancer",
    quote: "Bahut acha laga product khatam hone par ek aur mangwana hai.",
    image: "/images/man.png",
  },
  {
    name: "Rajesh Solanki",
    position: "Freelancer",
    quote: "I am feeling refreshing all the day after eating it.",
    image: "/images/man.png",
  },
  {
    name: "Rehan Khan",
    position: "Freelancer",
    quote: "Good results my strength insurance in 2 days",
    image: "/images/man.png",
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10" id="testimonial">
      <div className="flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="text-6xl text-black hover:text-customeGreen transform motion-safe:hover:scale-110"
        >
          &#8592;
        </button>
        <div className="w-full text-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${
                index === currentSlide ? "block" : "hidden"
              } transition-all duration-500`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full shadow-lg"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-white">{testimonial.position}</p>
                <p className="mt-2 text-gray-600">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="text-6xl text-black hover:text-customeGreen transform motion-safe:hover:scale-110"
        >
          &#8594;
        </button>
      </div>
      <div className="flex justify-center mt-5">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)} // Call goToSlide when clicked
            className={`mx-1 h-5 w-5 rounded-full cursor-pointer transition-colors duration-200 ${
              index === currentSlide ? "bg-customeBlue" : "bg-customeGreen"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
