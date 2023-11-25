import React, { useEffect, useState } from 'react'
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';


export default function Carrito() {

    const [total, setTotal] = useState();
    const [precios, setPrecios] = useState([]);
    const [items, setItems] = useState(false);
    const navigate = useNavigate();

    const [dataExample, setDataExample] = useState([
        {
            id: 1,
            nombre: "Collarcito",
            precio: 100,
            marca: "Guess",
            modelo: "Collar",
            foto: "aga.webp",
            cantidad: 1,
        }
    ])

    useEffect(() => {
        setPrecios(dataExample);
        if (dataExample.length > 0) {
            setItems(true)
        } else {
            setItems(false);
        }
    }, [dataExample]);

    useEffect(() => {
        const nuevoTotal = precios.reduce((acumulador, producto) => {
            return acumulador + (producto.precio * producto.cantidad);
        }, 0);
        setTotal(nuevoTotal);
    }, [precios]);


    const handleIncrement = (id) => {
        const updatedData = dataExample.map((producto) =>
            producto.id === id ? { ...producto, cantidad: producto.cantidad + 1 } : producto
        );
        setDataExample(updatedData);
    };

    const handleDecrement = (id) => {
        const updatedData = dataExample.map((producto) =>
            producto.id === id && producto.cantidad > 1 ? { ...producto, cantidad: producto.cantidad - 1 } : producto
        );
        setDataExample(updatedData);
    };

    const handleRemove = (id) => {
        const updatedData = dataExample.filter((producto) => producto.id !== id);
        setDataExample(updatedData);
    };

    const handleBuy = () => {
        localStorage.setItem('carrito', JSON.stringify(dataExample));
        localStorage.setItem('total', JSON.stringify(total));
        setDataExample([]);
        navigate("/resumen")
    };

    return (
        <div className="flex justify-center p-8 w-full max-w-6xl flex-col lg:mx-36">
            <div className='flex justify-between items-center w-full mt-12'>
                <div>
                    <h3 className='text-4xl font-normal text-gray-500'>Tu carrito</h3>
                </div>
                <div>
                    <a href='/' className='underline text-gray-500'>Seguir comprando</a>
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
            {!items
                ?
                <div className='flex mt-12 justify-center items-center'>
                    <h2 className='text-gray-500'>Lo sentimos, aún no has añadido productos a tu carrito :(</h2>
                </div>
                : <div className='border-b-[0.6px] border-gray-200'>
                    {
                        dataExample.map((data) => {
                            return (
                                <div key={data.id} className='flex justify-between items-center mb-14 mt-6'>
                                    <div className='flex justify-start items-center w-2/3'>
                                        <img className='h-24 min-h-[6rem] w-auto' src={data.foto} alt="item" />
                                        <div className='flex flex-col text-sm ml-12 space-y-1 text-gray-500'>
                                            <p>{data.nombre}</p>
                                            <p>$ {data.precio}.00</p>
                                            <p>Modelo: {data.modelo}</p>
                                            <p>Marca: {data.marca}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center w-1/3 text-gray-500'>
                                        <div className='flex items-center justify-around gap-x-4'>
                                            <MinusIcon
                                                onClick={() => handleDecrement(data.id)}
                                                className='h-4 w-auto cursor-pointer' />
                                            <p>{data.cantidad}</p>
                                            <PlusIcon
                                                onClick={() => handleIncrement(data.id)}
                                                className='h-4 w-auto cursor-pointer' />
                                            <TrashIcon
                                                onClick={() => handleRemove(data.id)}
                                                className='ml-12 h-4 w-auto cursor-pointer' />
                                        </div>
                                        <p>$ {data.precio}.00</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
            {!items
                ? <></> : <div className='mt-10 flex justify-end items-center gap-x-8 text-gray-500'>
                    <div className='flex flex-col'>
                        <div className='flex gap-x-2 justify-end'>
                            <p>Subtotal </p>
                            <p>$  {total}.00 MXN</p>
                        </div>
                        <div>
                            <button onClick={handleBuy} className='px-20 py-2 bg-[#322017] text-center font-light text-white hover:bg-[#4a372d]text-sm mt-2 text-sm tracking-widest'>Pagar pedido</button>
                        </div>
                    </div>
                </div>}
        </div>
    )
}
