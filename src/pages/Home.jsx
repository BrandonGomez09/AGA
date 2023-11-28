import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Home/Main'
import MasVendidos from '../components/Home/MasVendidos'
import Footer from '../components/Footer'
import Reviews from '../components/Home/Reviews'
import AcercaDe from '../components/Home/Acercade'


export default function Home() {
    return (
        <>
            <Navbar/>
            <Main/>
            <MasVendidos/>
            <AcercaDe/>
            <Reviews/>
            <Footer/>
        </>
    )
}
