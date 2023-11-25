import { useEffect, useState } from "react";
import ErrorPage from "../404/ErrorPage";

export default function ResumenOrden() {

    const total = localStorage.getItem("total");
    const [carrito, setCarrito] = useState([]);

    useEffect(()=>{
        const compra = JSON.parse(localStorage.getItem("carrito")) || [];
        setCarrito(compra);
        console.log(carrito)
    },[]);

    if(carrito.length <= 0){
        return(
            <>
                <ErrorPage/>
            </>
        )
    }



    const products = [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            price: '$36.00',
            color: 'Charcoal',
            size: 'M',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg',
            imageAlt: "Model wearing men's charcoal basic tee in large.",
        },
    ]
    return (
        <>
            <main className="relative lg:min-h-full">
                <div className="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
                    <img
                        src="https://scontent.ftgz2-1.fna.fbcdn.net/v/t39.30808-6/365782720_749415490525306_286230229346425318_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=INF86AxVhd4AX8zVhVt&_nc_ht=scontent.ftgz2-1.fna&oh=00_AfBcaS3CHeKc-V1Mfs89LdhVfkF3fAJ55S5NBVQCkxV3yA&oe=65658F75"
                        alt="TODO"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div>
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-16 xl:gap-x-24">
                        <div className="lg:col-start-2">
                            <h1 className="text-sm font-medium text-[#6b432f]">Pago realizado exitósamente</h1>
                            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">¡Gracias por apartar!</p>
                            <p className="mt-4 text-base text-gray-500">
                            Agradecemos su pedido, lo estamos procesando actualmente. Así que quédese tranquilo y le enviaremos la confirmación muy pronto.
                            </p>

                            <dl className="mt-10 text-sm font-medium">
                                <dt className="text-gray-900"> Numero de rastreo</dt>
                                <dd className="mt-2 text-[#6b432f]">#51547878755545848512</dd>
                            </dl>

                            <ul
                                role="list"
                                className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
                            >
                                {carrito.map((product) => (
                                    <li key={product.id} className="flex space-x-6 py-6">
                                        <img
                                            src={product.foto}
                                            alt={product.foto}
                                            className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                                        />
                                        <div className="flex-auto space-y-1">
                                            <h3 className="text-gray-900 flex gap-x-2">
                                                <p>{product.nombre}</p>
                                                <p>x {product.cantidad}</p>
                                            </h3>
                                            <p>Tipo: {product.modelo}</p>
                                            <p>Marca: {product.marca}</p>
                                        </div>
                                        <p className="flex-none font-medium text-gray-900">$ {product.precio}.00</p>
                                    </li>
                                ))}
                            </ul>

                            <dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
                                <div className="flex justify-between">
                                    <dt>Subtotal</dt>
                                    <dd className="text-gray-900">${total}.00</dd>
                                </div>

                                <div className="flex justify-between">
                                    <dt>Envío</dt>
                                    <dd className="text-gray-900">Gratis</dd>
                                </div>

                                <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                                    <dt className="text-base">Total</dt>
                                    <dd className="text-base">${total}.00</dd>
                                </div>
                            </dl>


                            <div className="mt-16 border-t border-gray-200 py-6 text-right">
                                <a href="/" className="text-sm font-medium text-[#3f281c] hover:text-indigo-500">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
