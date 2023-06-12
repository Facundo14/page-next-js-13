import Carousel from "@/components/home/Carousel";
import Services from "@/components/home/Services";
import { WhatsaapButton } from "@/components/shared/WhatsaapButton";
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    title: 'Ventas | InforMatteo',
    description: 'Ventas | InforMatteo',
    keywords: 'Ventas | InforMatteo',
};

export default function Sell() {
  return (
    <section className="animate__animated animate__fadeIn">
        <h1>Ventas</h1>
    </section>
  )
}
