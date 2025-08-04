import React, { useState } from 'react';
import './extra.css';
import Extra1 from '../../assets/Ganesh.png';
import Extra2 from '../../assets/sleep.png';
import Extra3 from '../../assets/swift.png';
import Extra4 from '../../assets/Jatani.png';
import Extra5 from '../../assets/Killa.png';
import Extra6 from '../../assets/Marinedrive.png';
import Extra7 from '../../assets/building.png';
import Extra8 from '../../assets/dove.png';
import Extra9 from '../../assets/walk.png';
import Extra10 from '../../assets/train.png';
import Extra11 from '../../assets/road.png';
import Extra12 from '../../assets/jhumer.png';
import Video1 from '../../assets/Game trailer.mp4';
import Video2 from '../../assets/Edits 1 sula vineyard.mp4';

const images = [
  Extra1, Extra2, Extra3, Extra4, Extra5, Extra6,
  Extra7, Extra8, Extra9, Extra10, Extra11, Extra12
];

const Extra = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const prevImage = () => {
    setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCenterIndex((prev) => (prev + 1) % images.length);
  };

  const getImageAt = (offset) => {
    return images[(centerIndex + offset + images.length) % images.length];
  };

  return (
    <section id="creative">
      <h2 className="worksTitle">My Collections</h2>
      <span className="workDesc">
        A showcase of my visual creativity featuring reels, trailer edits, and photography.
      </span>

      <div className="carouselWrapper">
        <button className="arrowBtn classic left" onClick={prevImage}>❮</button>

        <div className="carouselDisplay">
          <img src={getImageAt(-2)} className="img img-blur" alt="blurred" />
          <img src={getImageAt(-1)} className="img img-semi-blur" alt="semi-blur" />
          <img src={getImageAt(0)} className="img img-center" alt="center" />
          <img src={getImageAt(1)} className="img img-semi-blur" alt="semi-blur" />
          <img src={getImageAt(2)} className="img img-blur" alt="blurred" />
        </div>

        <button className="arrowBtn classic right" onClick={nextImage}>❯</button>
      </div>

      <div className="videoSection">
        <h3 className="videoTitle">Video Glimpses</h3>
        <video className="videoPlayer" src={Video1} muted autoPlay loop playsInline
          onTimeUpdate={(e) => e.target.currentTime > 45 && (e.target.currentTime = 35)} />
        <video className="videoPlayer" src={Video2} muted autoPlay loop playsInline
          onTimeUpdate={(e) => e.target.currentTime > 15 && (e.target.currentTime = 5)} />
      </div>
    </section>
  );
};

export default Extra;
