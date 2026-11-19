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
import Video3 from '../../assets/Wandervid.mp4';

const photoGallery = [
  { 
    id: 'marinedrive',
    src: Extra6, 
    title: 'Marine Drive Horizon at Twilight', 
    category: 'Coastline & Landscape',
    orientation: 'landscape',
    aspectRatio: '16/9',
    caption: 'Expansive wide-angle panorama capturing coastal twilight reflections.'
  },
  { 
    id: 'killa',
    src: Extra5, 
    title: 'Historic Killa Fort Ruins', 
    category: 'Heritage & Panorama',
    orientation: 'landscape',
    aspectRatio: '16/9',
    caption: 'Historic stone ramparts and fort structure against scenic greenery.'
  },
  { 
    id: 'ganesh',
    src: Extra1, 
    title: 'Lord Ganesha Festive Portrait', 
    category: 'Cultural & Sacred',
    orientation: 'portrait',
    aspectRatio: '9/16',
    caption: 'Intricate spiritual idol portrait with radiant festive illumination.'
  },
  { 
    id: 'dove',
    src: Extra8, 
    title: 'Peace Dove in Flight', 
    category: 'Wildlife & Motion',
    orientation: 'portrait',
    aspectRatio: '3/4',
    caption: 'Action shutter freeze capturing graceful white wings in open sky.'
  },
  { 
    id: 'walk',
    src: Extra9, 
    title: 'Morning Solitude Walk', 
    category: 'Human & Life',
    orientation: 'portrait',
    aspectRatio: '9/16',
    caption: 'Minimalist morning silhouette reflecting tranquility and journey.'
  },
  { 
    id: 'building',
    src: Extra7, 
    title: 'Urban High-Rise Perspective', 
    category: 'Architecture & Geometry',
    orientation: 'portrait',
    aspectRatio: '9/16',
    caption: 'Towering residential structure emphasizing geometric verticality.'
  },
  { 
    id: 'jhumer',
    src: Extra12, 
    title: 'Festive Chandelier Glow', 
    category: 'Festive Lights',
    orientation: 'portrait',
    aspectRatio: '9/16',
    caption: 'Delicate crystal refractions and warm ambient illumination.'
  },
  { 
    id: 'jatani',
    src: Extra4, 
    title: 'Jatani Heritage & Architecture', 
    category: 'Heritage & Street',
    orientation: 'portrait',
    aspectRatio: '3/4',
    caption: 'Timeless architectural textures and regional heritage aesthetics.'
  },
  { 
    id: 'swift',
    src: Extra3, 
    title: 'The Swift Roadway Journey', 
    category: 'Automotive & Travel',
    orientation: 'portrait',
    aspectRatio: '9/16',
    caption: 'Reflective red automotive finish on scenic coastal drive.'
  },
  { 
    id: 'train',
    src: Extra10, 
    title: 'Vintage Locomotive & Steel Tracks', 
    category: 'Transit & Geometry',
    orientation: 'portrait',
    aspectRatio: '9/16',
    caption: 'Converging railway lines and classic locomotive engine.'
  },
  { 
    id: 'road',
    src: Extra11, 
    title: 'Winding Mountain Expressway', 
    category: 'Scenic Journey',
    orientation: 'portrait',
    aspectRatio: '9/16',
    caption: 'Ascending asphalt curve framed by lush foliage and mountain ridge.'
  },
  { 
    id: 'sleep',
    src: Extra2, 
    title: 'Quiet Slumber & Midnight Mood', 
    category: 'Candid & Life',
    orientation: 'portrait',
    aspectRatio: '9/16',
    caption: 'Subtle chiaroscuro and peaceful nocturnal innocence.'
  }
];

const videosList = [
  {
    src: Video1,
    title: 'High-Octane Cinematic Game Trailer',
    category: 'Cinematic Trailer Edit',
    tags: ['Motion Pacing', 'Sound Design', 'Action Sync']
  },
  {
    src: Video2,
    title: 'Sula Vineyards Travel Reel',
    category: 'Cinematic Travel Vlog',
    tags: ['Color Grading', 'Atmospheric Pacing', '4K Cut']
  },
  {
    src: Video3,
    title: 'Wander India Visual Journey',
    category: 'Cultural Promo Reel',
    tags: ['Culture Showcase', 'Dynamic Transitions', 'Audio Mix']
  }
];

const Extra = () => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [viewMode, setViewMode] = useState('spotlight'); // 'spotlight' or 'masonry'
  const [orientationFilter, setOrientationFilter] = useState('all'); // 'all', 'landscape', 'portrait'

  const filteredPhotos = orientationFilter === 'all'
    ? photoGallery
    : photoGallery.filter((p) => p.orientation === orientationFilter);

  const activePhoto = photoGallery[activePhotoIdx];

  const openLightbox = (index) => {
    setActivePhotoIdx(index);
    setLightboxOpen(true);
  };

  const nextPhoto = (e) => {
    e && e.stopPropagation();
    setActivePhotoIdx((prev) => (prev + 1) % photoGallery.length);
  };

  const prevPhoto = (e) => {
    e && e.stopPropagation();
    setActivePhotoIdx((prev) => (prev - 1 + photoGallery.length) % photoGallery.length);
  };

  return (
    <section id="creative" className="section-container">
      <div className="section-header">
        <span className="section-tag">Visual Storytelling</span>
        <h2 className="section-title">
          Creative Media & <span className="gradient-text">Photography Showcase</span>
        </h2>
        <p className="section-subtitle">
          Capturing stories through both <strong>panoramic landscape vistas</strong> and <strong>high-detail vertical portraits</strong>, 
          paired with cinematic video editing and color grading.
        </p>

        {/* View Mode & Orientation Controls */}
        <div className="gallery-control-bar">
          <div className="control-group">
            <span className="control-label">Orientation:</span>
            <div className="filter-pill-group">
              <button
                className={`filter-btn ${orientationFilter === 'all' ? 'filter-btn-active' : ''}`}
                onClick={() => setOrientationFilter('all')}
              >
                All ({photoGallery.length})
              </button>
              <button
                className={`filter-btn ${orientationFilter === 'landscape' ? 'filter-btn-active' : ''}`}
                onClick={() => setOrientationFilter('landscape')}
              >
                Landscape Panoramas (2)
              </button>
              <button
                className={`filter-btn ${orientationFilter === 'portrait' ? 'filter-btn-active' : ''}`}
                onClick={() => setOrientationFilter('portrait')}
              >
                Vertical Portraits (10)
              </button>
            </div>
          </div>

          <div className="control-group">
            <span className="control-label">View:</span>
            <div className="filter-pill-group">
              <button
                className={`filter-btn ${viewMode === 'spotlight' ? 'filter-btn-active' : ''}`}
                onClick={() => setViewMode('spotlight')}
              >
                Spotlight Canvas
              </button>
              <button
                className={`filter-btn ${viewMode === 'masonry' ? 'filter-btn-active' : ''}`}
                onClick={() => setViewMode('masonry')}
              >
                Masonry Grid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Photography Showcase */}
      <div className="photography-wrapper">
        
        {viewMode === 'spotlight' ? (
          /* Adaptive Spotlight Mode: Automatically expands for Landscape and frames gracefully for Portrait */
          <div className="spotlight-section">
            <div 
              className={`spotlight-frame glass-card spotlight-${activePhoto.orientation}`}
              onClick={() => openLightbox(activePhotoIdx)}
            >
              {/* Blurred Ambient Backdrop so no empty space */}
              <div 
                className="spotlight-blur-backdrop"
                style={{ backgroundImage: `url(${activePhoto.src})` }}
                aria-hidden="true"
              />

              {/* Main Crisp Foreground Image (Object-Fit Contain: Zero Cropping) */}
              <div className="spotlight-img-inner">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="spotlight-main-img"
                />
              </div>

              {/* Orientation Badge & Fullscreen Icon */}
              <div className="spotlight-top-tags">
                <span className="orientation-badge">
                  {activePhoto.orientation === 'landscape' ? '📐 Landscape Vista' : '📱 Portrait Frame'}
                </span>
                <button className="expand-btn" title="Expand Fullscreen" onClick={(e) => { e.stopPropagation(); openLightbox(activePhotoIdx); }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                </button>
              </div>

              {/* Caption Overlay */}
              <div className="spotlight-overlay">
                <div>
                  <span className="spotlight-cat">{activePhoto.category}</span>
                  <h4 className="spotlight-title">{activePhoto.title}</h4>
                  <p className="spotlight-caption-text">{activePhoto.caption}</p>
                </div>
              </div>

              {/* Carousel Arrows */}
              <button className="nav-arrow prev-arrow" onClick={prevPhoto} aria-label="Previous capture">
                ❮
              </button>
              <button className="nav-arrow next-arrow" onClick={nextPhoto} aria-label="Next capture">
                ❯
              </button>
            </div>

            {/* Thumbnail Navigation Row */}
            <div className="thumbnails-scroll-row">
              {filteredPhotos.map((photo) => {
                const globalIndex = photoGallery.findIndex(p => p.id === photo.id);
                return (
                  <button
                    key={photo.id}
                    className={`thumbnail-btn ${activePhotoIdx === globalIndex ? 'active-thumb' : ''} thumb-${photo.orientation}`}
                    onClick={() => setActivePhotoIdx(globalIndex)}
                    title={photo.title}
                  >
                    <img src={photo.src} alt={photo.title} className="thumb-img" />
                    <span className="thumb-orient-dot"></span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* Masonry Grid Mode: Displays both portrait and landscape side-by-side in native aspect ratios */
          <div className="masonry-gallery-grid">
            {filteredPhotos.map((photo) => {
              const globalIndex = photoGallery.findIndex(p => p.id === photo.id);
              return (
                <div
                  key={photo.id}
                  className={`masonry-item glass-card masonry-${photo.orientation}`}
                  onClick={() => openLightbox(globalIndex)}
                >
                  <div className="masonry-img-wrapper">
                    <img src={photo.src} alt={photo.title} className="masonry-img" loading="lazy" />
                    <div className="masonry-hover-overlay">
                      <span className="masonry-cat">{photo.category}</span>
                      <h4 className="masonry-title">{photo.title}</h4>
                      <span className="masonry-orient-pill">
                        {photo.orientation === 'landscape' ? 'Landscape (16:9)' : 'Portrait'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Video Reels Section */}
      <div className="video-showcase-section">
        <div className="gallery-header-row">
          <h3 className="creative-subheading">
            <span>🎬</span> Video Edits & Cinematic Trailers
          </h3>
          <span className="gallery-counter">3 Featured Works</span>
        </div>

        <div className="videos-grid">
          {videosList.map((vid, vIdx) => (
            <div key={vIdx} className="video-card glass-card">
              <div className="video-player-container">
                <video
                  src={vid.src}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="showcase-video"
                />
              </div>
              <div className="video-card-body">
                <span className="video-cat-badge">{vid.category}</span>
                <h4 className="video-title">{vid.title}</h4>
                <div className="video-tags-row">
                  {vid.tags.map((tg, tIdx) => (
                    <span key={tIdx} className="tech-pill">{tg}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-backdrop" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setLightboxOpen(false)} title="Close">
              ✕
            </button>
            <div className={`lightbox-img-frame lightbox-frame-${activePhoto.orientation}`}>
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="lightbox-full-img"
              />
            </div>
            <div className="lightbox-caption">
              <div>
                <span className="lightbox-cat">
                  {activePhoto.category} • {activePhoto.orientation === 'landscape' ? 'Panoramic Landscape' : 'Vertical Portrait'}
                </span>
                <h4 className="lightbox-title">{activePhoto.title}</h4>
                <p className="lightbox-subcaption">{activePhoto.caption}</p>
              </div>
              <div className="lightbox-nav-btns">
                <button className="lightbox-nav-btn" onClick={prevPhoto}>❮ Prev</button>
                <button className="lightbox-nav-btn" onClick={nextPhoto}>Next ❯</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Extra;