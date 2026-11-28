import React, { useState, useEffect } from "react";
import "./web.css";

function Website() {
  const slides = [
    {
      image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
      title: "Mountain Adventure",
      desc: "Explore the beauty of nature."
    },
    {
      image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
      title: "Ocean Paradise",
      desc: "Feel the calmness of the sea."
    },
    {
      image: "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg",
      title: "Green Forest",
      desc: "Discover peaceful forest landscapes."
    },
    {
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg",
      title: "City Lights",
      desc: "Experience vibrant city life."
    },
    {
      image: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
      title: "Beautiful Waterfall",
      desc: "Enjoy refreshing waterfall views."
    },
    {
      image: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
      title: "Nature Escape",
      desc: "Travel to amazing destinations."
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <h1 className="heading">Travel Destination Carousel</h1>

      <div className="carousel">
        <img
          src={slides[index].image}
          alt={slides[index].title}
          className="slide-image"
        />

        <div className="overlay">
          <h1>{slides[index].title}</h1>
          <p>{slides[index].desc}</p>
        </div>

        <button className="btn left" onClick={prevSlide}>
          ❮
        </button>

        <button className="btn right" onClick={nextSlide}>
          ❯
        </button>

        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={index === i ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>

      <footer className="footer">
        <h3>Karthik J</h3>
        <p>Register Number: 212225040176</p>
      </footer>
    </>
  );
}

export default Website;