import Carousel from "@/components/home/Carousel";
import Services from "@/components/home/Services";
import { WhatsaapButton } from "@/components/shared/WhatsaapButton";
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    title: 'Reparaciones | InforMatteo',
    description: 'Reparaciones | InforMatteo',
    keywords: 'Reparaciones | InforMatteo',
};

export default function Reparacion() {
  return (
    <section className="animate__animated animate__fadeIn">
        <h1>Reparacion</h1>
    </section>
  )
}
