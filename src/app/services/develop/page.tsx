import Carousel from "@/components/home/Carousel";
import Services from "@/components/home/Services";
import { WhatsaapButton } from "@/components/shared/WhatsaapButton";
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    title: 'Desarrollo | InforMatteo',
    description: 'Desarrollo | InforMatteo',
    keywords: 'Desarrollo | InforMatteo',
};

export default function Develop() {
  return (
    <section className="animate__animated animate__fadeIn">
        <h1>Desarrollo</h1>
    </section>
  )
}
