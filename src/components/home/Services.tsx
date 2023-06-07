import 'animate.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
    return (
        <section id="servicios" className="py-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-red-600 dark:text-white mb-8">Nuestros servicios</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8">
                    <Link href='/services/reparacion' className="bg-white justify-center items-center dark:bg-transparent rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 lg:flex">
                        <Image width={500} height={500}  className="w-96 sm:w-full h-72 object-cover" src="https://res.cloudinary.com/dexxkgchy/image/upload/v1685565031/InforMatteo/img/servicios/aipaduwot9uqxny3hriz.jpg" alt="Reparación" />
                        <div className='px-3 text-center'>
                            <h3 className="text-lg text-gray-800 dark:text-gray-300 text-start font-semibold my-2">Reparación - Mantenimiento y Actualización</h3>
                            <p className="text-gray-800 dark:text-white text-justify">Soluciones confiables para tus dispositivos informáticos. Nuestro servicio experto resuelve problemas, optimiza el rendimiento y mantiene tus equipos actualizados. Confía en nosotros para mantener tus dispositivos en excelente estado y aprovechar al máximo su funcionalidad. Estamos aquí para brindarte soluciones rápidas y eficientes.</p>
                        </div>
                    </Link>
                    <Link href='/services/develop' className="bg-white justify-center items-center dark:bg-transparent rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 lg:flex lg:flex-row-reverse">
                        <Image width={500} height={500} className="w-96 sm:w-full h-72 object-cover" src="https://res.cloudinary.com/dexxkgchy/image/upload/v1685565031/InforMatteo/img/servicios/ga4sbcvh6uribrtv7qpx.jpg" alt="Desarrollo" />
                        <div className="px-3 text-center">
                            <h3 className="text-lg text-gray-800 dark:text-gray-300 text-start font-semibold my-2">Desarrollo y mantención de aplicaciones web</h3>
                            <p className="text-gray-800 dark:text-white text-justify">Transformamos tus ideas en realidades digitales. Nuestro servicio experto se encarga del desarrollo y mantenimiento de aplicaciones web personalizadas, asegurando su funcionamiento óptimo y actualizado. Confía en nuestro equipo para crear soluciones digitales innovadoras y mantener tus aplicaciones web en excelente estado. Estamos comprometidos en brindarte resultados de calidad y satisfacción garantizada.</p>
                        </div>
                    </Link>
                    <Link href='/services/sell' className="bg-white justify-center items-center dark:bg-transparent rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 lg:flex">
                        <Image width={500} height={500} className="w-96 sm:w-full h-72 object-cover" src="https://res.cloudinary.com/dexxkgchy/image/upload/v1685565031/InforMatteo/img/servicios/lbowzjyzmrhnojtomrfp.jpg" alt="Venta" />
                        <div className="px-3 text-center">
                            <h3 className="text-lg text-gray-800 dark:text-gray-300 text-start font-semibold my-2">Venta de insumos Informáticos</h3>
                            <p className="text-gray-800 dark:text-white text-justify">Ofrecemos una amplia selección de insumos informáticos de alta calidad. Desde componentes y periféricos hasta equipos completos, tenemos todo lo que necesitas para mantener tu tecnología actualizada y funcionando sin problemas. Nuestro objetivo es brindarte soluciones confiables y productos de primera clase que satisfagan tus necesidades informáticas. Confía en nosotros para encontrar los insumos adecuados y obtener un excelente servicio al cliente.</p>
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    )
}