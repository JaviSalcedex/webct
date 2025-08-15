import React from 'react'

const Blog = () => {
    return (
        <section className="blog py-5">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
                    <h4 className="text-uppercase">Read Blog Posts</h4>
                    <a href="index.html" className="btn-link">Ver más</a>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <article className="post-item">
                            <div className="post-image">
                                <a href="index.html">
                                    <img src="images/volo001.jpeg" alt="image" className="post-grid-image img-fluid" />
                                </a>
                            </div>
                            <div className="post-content d-flex flex-wrap gap-2 my-3">
                                <div className="post-meta text-uppercase fs-6 text-secondary">
                                    <span className="post-category">Opalina /</span>
                                    <span className="meta-day"> jul 7, 2024</span>
                                </div>
                                <h5 className="post-title text-uppercase">
                                    <a href="index.html">Nueva colección para guardar de camisetas.</a>
                                </h5>
                                <p></p>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-4">
                        <article className="post-item">
                            <div className="post-image">
                                <a href="index.html">
                                    <img src="images/dyd.jpeg" alt="image" className="post-grid-image img-fluid" />
                                </a>
                            </div>
                            <div className="post-content d-flex flex-wrap gap-2 my-3">
                                <div className="post-meta text-uppercase fs-6 text-secondary">
                                    <span className="post-category">Cartonaje /</span>
                                    <span className="meta-day"> Nov 11, 2024</span>
                                </div>
                                <h5 className="post-title text-uppercase">
                                    <a href="index.html">Impacto inmediato en la marca.</a>
                                </h5>
                                <p></p>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-4">
                        <article className="post-item">
                            <div className="post-image">
                                <a href="index.html">
                                    <img src="images/levisime.jpeg" alt="image" className="post-grid-image img-fluid" />
                                </a>
                            </div>
                            <div className="post-content d-flex flex-wrap gap-2 my-3">
                                <div className="post-meta text-uppercase fs-6 text-secondary">
                                    <span className="post-category"> /</span>
                                    <span className="meta-day"> jul 28, 2025</span>
                                </div>
                                <h5 className="post-title text-uppercase">
                                    <a href="index.html">Caja con cartón duro exclusiva.</a>
                                </h5>
                                <p></p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Blog
