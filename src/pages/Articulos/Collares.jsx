import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ArticulosCategoria from '../../components/Articulos/ArticulosCategoria'


export default function Collares() {

    const products = [
        {
            id: 1,
            nombre: 'Collar',
            marca: 'Guess',
            foto: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
            precio: '140',
        },
        
    ]
    return (
        <div>
            <Navbar/>
                <ArticulosCategoria data={products}/>
            <Footer/>
        </div>
    )
}
