import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function Formulario() {
    return (
        <>

            <div className="flex min-h-full h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#F9FAFB]">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div>
                        <a href='/'>
                            <ArrowLeftIcon className='h-5 w-auto text-gray-600 cursor-pointer hover:animate-pulse hover:scale-110 duration-300' />
                        </a>
                        <img
                            className="mx-auto h-20 w-auto"
                            src="/public/aga.webp"
                            alt="aga-logo"
                        />
                    </div>
                    <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-[#322017]">
                        Ingresa en tu cuenta
                    </h2>
                </div>

                <div className="mt-4 p-16 sm:mx-auto sm:w-full sm:max-w-lg  rounded-md bg-white border-[0.1px] shadow-lg">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Correo electrónico
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Usuario
                            </label>
                            <div className="mt-2">
                                <input
                                    id="user"
                                    name="user"
                                    type="text"
                                    autoComplete="user"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contraseña
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-[#322017] hover:text-[#4a372d]">
                                        ¿Olvidaste tu contraseña?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#322017] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4a372d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-300"
                            >
                                Ingresar
                            </button>
                        </div>
                    </form>
                </div>
                <p className="mt-10 text-center text-sm text-gray-500">
                        ¿No tienes una cuenta?{'  '}
                        <a href="/register" className="font-semibold leading-6 text-[#322017] hover:text-[#4a372d]">
                            Registrate aquí
                        </a>
                    </p>
            </div>
        </>
    )
}
