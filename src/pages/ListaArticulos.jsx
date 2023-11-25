import React from 'react'
import Navbar from '../components/Navbar'
import TodosArticulos from '../components/Articulos/TodosArticulos'
import Footer from '../components/Footer'

export default function ListaArticulos() {
    return (
        <>
            <Navbar/>
            <TodosArticulos/>
            <Footer/>
        </>
    )
}
