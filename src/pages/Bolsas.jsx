import React, { useEffect } from 'react'
import ProductosPrincipales from '../components/ProductosPrincipales'
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
                        <h1 className="section-title text-center mt-4">Catálogo de Bolsas</h1>
                        <div className="col-md-6 text-center">
                            <p>Desde un regalo hasta un proyecto personal, cada una de nuestras bolsas está diseñada para dar vida a tus ideas. Descubre nuestra colección, donde la creatividad y el estilo se encuentran en cada detalle.</p>
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
                                                    <img src="images/portada-bolsa-01.jpg" alt="categories" className="product-image img-fluid" />
                                                </a>
                                            </div>
                                            <div className="category-content">
                                                <div className="product-button">
                                                    <a href="index.html" className="btn btn-common text-uppercase">bolsas de papel glasse</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 p-2 pt-4">
                                        <div className="cat-item image-zoom-effect">
                                            <div className="image-holder">
                                                <a href="index.html">
                                                    <img src="images/portada-bolsa-02.jpg" alt="categories" className="product-image img-fluid" />
                                                </a>
                                            </div>
                                            <div className="category-content">
                                                <div className="product-button">
                                                    <a href="index.html" className="btn btn-common text-uppercase">bolsas de papel kraft</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 p-2 pt-4">
                                        <div className="cat-item image-zoom-effect">
                                            <div className="image-holder">
                                                <a href="index.html">
                                                    <img src="images/portada-bolsa-03.jpg" alt="categories" className="product-image img-fluid" />
                                                </a>
                                            </div>
                                            <div className="category-content">
                                                <div className="product-button">
                                                    <a href="index.html" className="btn btn-common text-uppercase">bolsas de opalina</a>
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
