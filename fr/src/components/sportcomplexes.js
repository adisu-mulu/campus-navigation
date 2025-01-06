import React from "react";
import { Carousel } from "react-bootstrap";
import '../components/style.css';
// Sample data for the photo gallery
const photos = [
  {
    src: "https://via.placeholder.com/800x400",
    title: "Beautiful Landscape",
    description: "A breathtaking view of the mountains during sunrise.",
  },
  {
    src: "https://via.placeholder.com/800x400",
    title: "Cityscape",
    description: "A vibrant city lit up at night with colorful lights.",
  },
  {
    src: "https://via.placeholder.com/800x400",
    title: "Ocean Waves",
    description: "Soothing waves crashing against the shore on a sunny day.",
  },
  {
    src: "https://via.placeholder.com/800x400",
    title: "Forest Path",
    description: "A serene path through a dense forest in autumn.",
  },
];

const SportComplex = () => {
  return (
    <div id="galleryDiv">
      <h2 className="text-center mb-4">Sport and Entertainment Complexes</h2>
      <Carousel id="carouselId">
        {photos.map((photo, index) => (
          <Carousel.Item key={index} id="carouselItem">
            <img
            //   className="d-block w-100"
              src={photo.src} 
              alt={photo.title}
            //   style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SportComplex;
