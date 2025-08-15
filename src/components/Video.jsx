import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Video = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="video py-5 overflow-hidden">
            <div className="container-fluid" id='blog'>
                <div className="row">
                    <div className="video-content open-up" data-aos="zoom-out">
                        <div className="video-bg">
                            <img src="images/imagen-banner.jpg" alt="video" className="video-image img-fluid" />
                        </div>
                        <div className="video-player">
                            <a className="youtube" href="https://www.youtube.com/embed/pjtsGzQjFM4">
                                {/* <svg width={24} height={24} viewBox="0 0 24 24"> 
                                    <use xlinkHref="#play" />
                                </svg>*/}
                                <img src="images/text-pattern.png" alt="pattern" className="text-rotate" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video
