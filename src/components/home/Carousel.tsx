'use client'
import Image from "next/image";
import { Carousel as Slide } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const imagesCarlusel = [
    {
        id: 1,
        src: '/img/carousel/1.png'
    },
    {
        id: 2,
        src: '/img/carousel/2.jpg'
    },
    {
        id: 3,
        src: '/img/carousel/3.jpg'
    }
]

export default function Carousel() {
    return (
        <section className="rounded sm:py-4 md:py-6 max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
            <Slide showThumbs={false} showStatus={false} infiniteLoop showIndicators={true}  showArrows autoPlay >
                {
                    imagesCarlusel.map(image => (
                        <Image width={500} height={500} key={image.id} loading="lazy" className='rounded w-full h-[200px] sm:h-[200px] md:h-[350px] lg:h-[450px] xl:h-[500px] object-cover' src={image.src} alt="Imagen del carusel" />
                    ))
                }

            </Slide>
        </section>
    )
}