import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Home/Main'
import MasVendidos from '../components/Home/MasVendidos'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Navbar/>
            <Main/>
            <MasVendidos/>
            <Footer/>
        </>
    )
}
