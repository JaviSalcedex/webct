import React from 'react'

const Servicio = () => {
    return (
        <section className="collection position-relative py-5">
            <div className="container" id='servicio'>
                <div className="row">
                    <div className="collection-item d-flex flex-wrap my-5" >
                        <div className="col-md-6 column-container">
                            <div className="image-holder">
                                <img src="images/Imagen1.jpg" alt="collection" className="product-image img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6 column-container bg-white">
                            <div className="collection-content p-5 m-0 m-md-5">
                                <h3 className="element-title text-uppercase">Servicio de Personalizacion</h3>
                                <p>
                                    Nuestra misión es ofrecer soluciones de empaques y presentaciones únicas y personalizadas, que realcen el valor de los productos de nuestros clientes a través de la calidad de nuestros materiales y la originalidad de nuestros diseños.
                                    Cada bolsa personalizada que producimos para ti es una extensión de tu marca. Con tu logo, tus colores y un diseño único, nuestras bolsas de regalo se convierten en publicidad móvil, llevando tu mensaje a nuevos clientes y fortaleciendo tu presencia en el mercado.
                                </p>
                                <a href="#" className="btn btn-dark text-uppercase mt-3">Comunicanos tu idea</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Servicio
