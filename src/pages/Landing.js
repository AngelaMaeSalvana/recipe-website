import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  
import LandingNav from '../components/LandingNav';
import '../App.css';
import image1 from '../assets/image(1).png';
import image2 from '../assets/image(2).png';
import image3 from '../assets/image(3).png';
import image4 from '../assets/image(4).png';
import image5 from '../assets/image(5).png';
import image6 from '../assets/image(6).png';

const images = [image1, image3, image4, image6, image2, image5];

const Landing = () => {
  const [displayedImages, setDisplayedImages] = useState(images.slice(0, 4)); // 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % images.length;
        setDisplayedImages([
          images[nextIndex],
          images[(nextIndex + 1) % images.length], 
          images[(nextIndex + 2) % images.length],
          images[(nextIndex + 3) % images.length], 
        ]);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval); 
  }, [images]);

  return (
    <div className='landing-container'>
      <LandingNav />
      <div className='hero-con'>
        <div className='hero-title'>
          <h1>Cook Your Recipes, Share with the World</h1>
          <p>Organize your favorite dishes, discover new flavors, and connect with a community that shares your love for food.</p>
          <div className='hero-buttons'>
            <Link to='/signup' className='primary-btn'>Get Started for Free</Link>
          </div>
        </div>
        <div className='hero-image'>
          <div className='image-grid'>
            {displayedImages.map((img, index) => (
              <img key={index} src={img} alt={`Delicious Dish ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;