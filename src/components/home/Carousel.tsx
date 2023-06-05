'use client'
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
        <section className="py-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Slide showThumbs={false} showStatus={false} infiniteLoop showIndicators={true}  showArrows autoPlay >
                {
                    imagesCarlusel.map(image => (
                        <img key={image.id} className='w-full h-[450px] object-cover' width="100%" src={image.src} alt="Imagen del carusel" />
                    ))
                }

            </Slide>
        </section>
    )
}