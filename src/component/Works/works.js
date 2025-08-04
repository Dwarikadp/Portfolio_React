import React from 'react'
import './works.css';
import hotelBook from '../../assets/hotel.png';
import sentiAnl from '../../assets/SentiAnl.png';
import wanderIndImg from '../../assets/wanderInd.png';
import githubLogo from '../../assets/Github.png';
import colabLogo from'../..//assets/colablogo.png';
import gdocsLogo from '../../assets/Docs.png';


const Works = () => {
    return (
        <section id='projects'>
            <h2 className="worksTitle">My Projects</h2>
            <span className='workDesc'>A selection of my web and data projects that highlight my skills in full-stack development, problem-solving, and creative design.</span>
            <div className="allProjects">
                <div className="allproject">
                    <img src={hotelBook} alt="hotelBook" className="allProjectImg" />
                    <div className="allProjectsText">
                        <h2>Interactive HotelBooking Platform</h2>
                        <p>A fully functional hotel booking platform with user-friendly UI and seamless backend integration. Built using React and MongoDB to enable smooth hotel listings and dynamic bookings</p>
                        <a href="https://github.com/Dwarikadp/Dwarika-DIgitalBhem" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub Repo" style={{ width: '24px', height: '24px', marginTop: '8px' }} />
                        </a>
                    </div>
                </div>
                <div className="allproject">
                    <img src={wanderIndImg} alt="wanderIndImg" className="allProjectImg" />
                    <div className="allProjectsText">
                        <h2>Wander India:Tourism Platform</h2>
                        <p>An interactive travel website promoting Indian tourism with maps, food guides, and city highlights. Currently developing an e-commerce feature for local artisans to showcase their products globally.</p>
                        <a href="https://github.com/Dwarikadp/SIH" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub Repo" style={{ width: '24px', height: '24px', marginTop: '8px' }} />
                        </a>
                    </div>
                </div>
                <div className="allproject">
                    <img src={sentiAnl} alt="sentiAnl" className="allProjectImg" />
                    <div className="allProjectsText">
                        <h2>Sales Forecasting with Sentiment Analysis</h2>
                        <p>A predictive analytics tool combining SARIMA, Prophet, Bi-LSTM, and VADER sentiment analysis. Reduced MAE by 18% by integrating customer reviews into sales forecasts using deep learning and NLP.</p>
                        <a
                            href="https://colab.research.google.com/drive/1jGB5jCLydzNr_P4ehY6oTzTCOo9tNqhu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={colabLogo}
                                alt="Google Colab"
                                style={{ width: '24px', height: '24px' }}
                            />
                        </a>
                         <a
      href="https://docs.google.com/document/d/1xJZLSR38WhfLMrIU28PtsWc_07QUVKKMo6ZohPb2Pm4/edit?tab=t.0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={gdocsLogo}
        alt="Google Docs"
        style={{ width: '24px', height: '24px',marginTop:'5px',marginLeft:'12px' }}
      />
    </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;