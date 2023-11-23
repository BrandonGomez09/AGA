import React from 'react'

export default function Carrito() {

    const dataExample = [
        {
            id: 1,
            nombre: "Collarcito",
            precio: 299,
            marca: "Guess",
            modelo: "Collar",
            foto: "aga.webp",
            cantidad: 2,
        },
                {
                    id: 2,
                    nombre: "Collarcito",
                    precio: 299,
                    marca: "Guess",
                    modelo: "Collar",
                    foto: "aga.webp",
                    cantidad: 2,
                },
                {
                    id: 3,
                    nombre: "Collarcito",
                    precio: 299,
                    marca: "Guess",
                    modelo: "Collar",
                    foto: "aga.webp",
                    cantidad: 2,
                },
        
    ]


    return (
        <div className="flex justify-center p-8 w-full max-w-6xl flex-col lg:mx-36">
            <div className='flex justify-between items-center w-full mt-12'>
                <div>
                    <h3 className='text-4xl font-normal text-gray-500'>Tu carrito</h3>
                </div>
                <div>
                    <h4 className='underline text-gray-500'>Seguir comprando</h4>
                </div>
            </div>
            <div className='flex justify-between w-full mt-12 uppercase text-[0.6rem] text-gray-400 border-b-[0.5px] pb-3 border-gray-200'>
                <div className='w-2/3'>
                    <p className='tracking-widest'>Producto</p>
                </div>
                <div className='flex justify-between items-center w-1/3'>
                    <p className='tracking-widest'>Cantidad</p>
                    <p className='tracking-widest'>Total</p>
                </div>
            </div>
            <div>
                {
                    dataExample.map((data) => {
                        return (
                            <div key={data.id} className='flex justify-between items-center mb-14 mt-6'>
                                <div className='flex justify-start items-center w-2/3'>
                                    <img className='h-24 min-h-[6rem] w-auto' src={data.foto} alt="item" />
                                    <div className='flex flex-col text-sm ml-12 space-y-1 text-gray-600'>
                                        <p>{data.nombre}</p>
                                        <p>$ {data.precio}.00</p>
                                        <p>Modelo: {data.modelo}</p>
                                        <p>Marca: {data.marca}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center w-1/3 text-gray-600'>
                                    <p className='ml-6'>{data.cantidad}</p>
                                    <p>{data.precio}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
