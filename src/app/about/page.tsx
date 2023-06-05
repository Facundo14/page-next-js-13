import { Metadata } from 'next/types';

export const metadata: Metadata = {
    title: 'Sobre Nosotros  | InforMatteo',
    description: 'Somos una empresa dedicada al desarrollo de soluciones informáticas innovadoras y a la venta de insumos de alta calidad. Desde nuestro inicio en el año 2022, nos hemos comprometido en ofre | InforMatteo',
};
export default function About() {
    return (
        <section id="sobreNosotros" className="animate__animated animate__fadeIn py-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold dark:text-red-600 mb-8">Sobre Nosotros</h2>
            <p className="dark:text-white leading-loose">
              Somos una empresa dedicada al desarrollo de soluciones informáticas innovadoras y a la venta de insumos de alta calidad. Desde nuestro inicio en el año 2022, nos hemos comprometido en ofrecer a nuestros clientes productos y servicios de la más alta calidad, respaldados por un equipo de profesionales altamente capacitados y comprometidos con su trabajo.
            </p>
            <p className="dark:text-white leading-loose mt-4">
              Nuestra filosofía de trabajo se basa en la satisfacción del cliente, y para ello nos esforzamos en ofrecer un trato personalizado y un servicio postventa de excelencia. Creemos en la importancia de la tecnología en el mundo actual y en su capacidad para mejorar la calidad de vida de las personas y aumentar la productividad de las empresas.
            </p>
            <p className="dark:text-white leading-loose mt-4">
              En nuestra empresa, nos mantenemos en constante evolución, adaptándonos a las nuevas tendencias y tecnologías del mercado. Nos esforzamos en ofrecer siempre soluciones innovadoras y de vanguardia, que permitan a nuestros clientes estar a la vanguardia de su sector.
            </p>
            <p className="dark:text-white leading-loose mt-4">
              Siempre estamos dispuestos a escuchar las necesidades de nuestros clientes y ofrecer soluciones personalizadas que se ajusten a sus requerimientos y presupuestos. Esperamos poder seguir acompañándolos en su crecimiento y desarrollo, brindándoles soluciones informáticas a medida y un servicio de calidad.
            </p>
          </div>
        </div>
      </section>
    )
}