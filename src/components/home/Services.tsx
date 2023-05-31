import 'animate.css'
import Image from 'next/image'

export default function Services() {
    return (
        <section id="servicios" className="py-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8">Nuestros servicios</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
                    <div className="rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 flex">
                        <img className="w-96 h-72 object-cover" src="https://res.cloudinary.com/dexxkgchy/image/upload/v1685565031/InforMatteo/img/servicios/aipaduwot9uqxny3hriz.jpg" alt="Reparación" />
                        <div className="p-4">
                            <h3 className="text-lg text-gray-300 font-semibold mb-2">Reparación - Mantenimiento y Actualización</h3>
                            <p className="text-white"> Soluciones confiables para tus dispositivos informáticos. Nuestro servicio experto resuelve problemas, optimiza el rendimiento y mantiene tus equipos actualizados. Confía en nosotros para mantener tus dispositivos en excelente estado y aprovechar al máximo su funcionalidad. Estamos aquí para brindarte soluciones rápidas y eficientes.</p>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 flex flex-row-reverse">
                        <img className="w-96 h-72 object-cover" src="https://res.cloudinary.com/dexxkgchy/image/upload/v1685565031/InforMatteo/img/servicios/lbowzjyzmrhnojtomrfp.jpg" alt="Desarrollo" />
                        <div className="p-4">
                            <h3 className="text-lg text-gray-300 font-semibold mb-2">Desarrollo y mantención de aplicaciones web</h3>
                            <p className="text-white">Transformamos tus ideas en realidades digitales. Nuestro servicio experto se encarga del desarrollo y mantenimiento de aplicaciones web personalizadas, asegurando su funcionamiento óptimo y actualizado. Confía en nuestro equipo para crear soluciones digitales innovadoras y mantener tus aplicaciones web en excelente estado. Estamos comprometidos en brindarte resultados de calidad y satisfacción garantizada.</p>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 flex">
                        <img className="w-96 h-72 object-cover" src="https://res.cloudinary.com/dexxkgchy/image/upload/v1685565031/InforMatteo/img/servicios/ga4sbcvh6uribrtv7qpx.jpg" alt="Venta" />
                        <div className="p-4">
                            <h3 className="text-lg text-gray-300 font-semibold mb-2">Venta de insumos Informáticos</h3>
                            <p className="text-white">Ofrecemos una amplia selección de insumos informáticos de alta calidad. Desde componentes y periféricos hasta equipos completos, tenemos todo lo que necesitas para mantener tu tecnología actualizada y funcionando sin problemas. Nuestro objetivo es brindarte soluciones confiables y productos de primera clase que satisfagan tus necesidades informáticas. Confía en nosotros para encontrar los insumos adecuados y obtener un excelente servicio al cliente.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    )
}