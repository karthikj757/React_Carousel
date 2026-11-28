# Ex05 Image Carousel
## Date: 28.11.2026

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM

## PROGRAM

## Website.jsx
```
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
```
## Web.css
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

body {
  min-height: 100vh;
  background: linear-gradient(135deg, #141e30, #243b55);
}

.heading {
  text-align: center;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
}

.carousel {
  width: 90%;
  max-width: 1100px;
  height: 600px;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  left: 40px;
  bottom: 60px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  padding: 25px;
  border-radius: 15px;
}

.overlay h1 {
  font-size: 45px;
  margin-bottom: 10px;
}

.overlay p {
  font-size: 20px;
}

.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: rgba(255, 255, 255, 0.25);
  color: white;
  font-size: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
}

.btn:hover {
  background: white;
  color: black;
}

.left {
  left: 20px;
}

.right {
  right: 20px;
}

.dots {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}

.dot {
  width: 14px;
  height: 14px;
  background: white;
  opacity: 0.5;
  display: inline-block;
  border-radius: 50%;
  margin: 0 6px;
  cursor: pointer;
}

.active {
  opacity: 1;
  transform: scale(1.3);
}

.footer {
  text-align: center;
  color: white;
  margin-top: 25px;
  padding-bottom: 20px;
}

@media (max-width: 768px) {
  .carousel {
    height: 400px;
  }

  .overlay h1 {
    font-size: 28px;
  }

  .overlay p {
    font-size: 15px;
  }
}
```
## Apps.jsx
```
import Website from "./Website";

function App() {
  return <Website />;
}

export default App;
```


## OUTPUT

https://github.com/user-attachments/assets/1cfbc535-24d6-4f7e-87d5-ca31a2c36e41

## RESULT
The program for creating Image Carousel using React is executed successfully.
