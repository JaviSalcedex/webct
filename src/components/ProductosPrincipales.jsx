import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductosPrincipales = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id="billboard" className="py-5">
            <div className="container">

                <div className="row justify-content-center">
                    <h1 className="section-title text-center mt-4" data-aos="fade-up">¿Quienes Somos?</h1>
                    <div className="col-md-6 text-center" data-aos="fade-up" data-aos-delay="300">
                        <p>Creaciones Thanyi es una empresa dedicada a la elaboración de empaques, especialmente cajas y bolsas para eventos importantes
                            con mas de 10 años de experiencia en el rubro, teniendo como principal objetivo la satisfacción de clientes a través del
                            trato personalizado.
                        </p>
                    </div>
                </div>

                <div className="row" id='productos_principales'>
                    <div className="swiper main-swiper py-4" data-aos="fade-up" data-aos-delay="600">
                        <div className="swiper-wrapper d-flex border-animation-left">

                            <div className="col-md-6 p-4 text-center">
                                <div className="swiper-slide">
                                    <div className="banner-item image-zoom-effect">
                                        <div className="image-holder">
                                            <Link to="/bolsas" href="#">
                                                <img src="images/portada-bolsas.jpg" alt="product" className="img-fluid" />
                                            </Link>
                                        </div>
                                        <div className="banner-content py-4">
                                            <h5 className="element-title text-uppercase">
                                                <a href="index.html" className="item-anchor">Catálogo De Bolsas</a>
                                            </h5>
                                            <p>Más de 15 modelos creativos, que seguro te provocará emoción, explora ahora.</p>
                                            <div className="btn-left">
                                                <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Descúbrelo Ahora</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 p-4 text-center">
                                <div className="swiper-slide">
                                    <div className="banner-item image-zoom-effect">
                                        <div className="image-holder">
                                            <Link to="/cajas" href="#">
                                                <img src="images/portada-cajas-02.jpg" alt="product" className="img-fluid" width={1624} height={2048} />
                                            </Link>
                                        </div>
                                        <div className="banner-content py-4">
                                            <h5 className="element-title text-uppercase">
                                                <a href="index.html" className="item-anchor">Catálogo de cajas</a>
                                            </h5>
                                            <p>Éxplora los 17 modelos de cajas que tenemos para ti, sumergete en la creatividad que ofrecemos.</p>
                                            <div className="btn-left">
                                                <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Descúbrelo Ahora</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="swiper-pagination" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductosPrincipales
