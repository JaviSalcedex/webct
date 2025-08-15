import React, { useEffect } from 'react'
import Servicio from '../components/Servicio'
import Video from '../components/Video'
import Blog from '../components/Blog'
import SingUp from '../components/SingUp'
import FollowUsOnIg from '../components/FollowUsOnIg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bolsas = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section id="billboard" className="py-5">
                <div className="container">

                    <div className="row justify-content-center">
                        <h1 className="section-title text-center mt-4">Catálogo de Cajas</h1>
                        <div className="col-md-6 text-center">
                            <p>Nuestra colección de cajas está pensada para cada necesidad. Ya sea para almacenamiento, envíos seguros o la presentación perfecta de un regalo, encuentra la forma, el tamaño y la resistencia ideal para tu proyecto.</p>
                        </div>
                    </div>

                    <div className="open-up" data-aos="zoom-out">
                        <div className="row">
                            <div className="swiper main-swiper py-4">
                                <div className="swiper-wrapper d-flex border-animation-left">

                                    <div className="col-md-4 p-2 pt-4">
                                        <div className="cat-item image-zoom-effect">
                                            <div className="image-holder">
                                                <a href="index.html">
                                                    <img src="images/portada-caja-01.jpg" alt="categories" className="product-image img-fluid" />
                                                </a>
                                            </div>
                                            <div className="category-content">
                                                <div className="product-button">
                                                    <a href="index.html" className="btn btn-common text-uppercase">Sulfatado</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 p-2 pt-4">
                                        <div className="cat-item image-zoom-effect">
                                            <div className="image-holder">
                                                <a href="index.html">
                                                    <img src="images/portada-caja-02.jpg" alt="categories" className="product-image img-fluid" />
                                                </a>
                                            </div>
                                            <div className="category-content">
                                                <div className="product-button">
                                                    <a href="index.html" className="btn btn-common text-uppercase">Catón Duro</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 p-2 pt-4">
                                        <div className="cat-item image-zoom-effect">
                                            <div className="image-holder">
                                                <a href="index.html">
                                                    <img src="images/portada-caja-03.jpg" alt="categories" className="product-image img-fluid" />
                                                </a>
                                            </div>
                                            <div className="category-content">
                                                <div className="product-button">
                                                    <a href="index.html" className="btn btn-common text-uppercase">Acetato</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Servicio />
            <Video />
            <Blog />
            <SingUp />
            {/* <FollowUsOnIg /> */}

        </>
    )
}

export default Bolsas
