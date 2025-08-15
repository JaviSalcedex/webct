import React from 'react'
import ProductosPrincipales from '../components/ProductosPrincipales'
import SingUp from '../components/SingUp'
import FollowUsOnIg from '../components/FollowUsOnIg'
import Blog from '../components/Blog'
import Video from '../components/Video'
import Carrusel from '../components/Carrusel'
import Servicio from '../components/Servicio'

const Inicio = () => {
    return (
        <div>
            
            <ProductosPrincipales />

            <Servicio/>
            <Video/>
            <Blog/>
            <SingUp />
            {/* <FollowUsOnIg /> */}
        </div>
    )
}

export default Inicio
