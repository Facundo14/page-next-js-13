import Carousel from "@/components/home/Carousel";
import Services from "@/components/home/Services";
import { WhatsaapButton } from "@/components/shared/WhatsaapButton";
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    title: 'Inicio | InforMatteo',
    description: 'Inicio | InforMatteo',
    keywords: 'Inicio | InforMatteo',
};

export default function Home() {
  return (
    <>
      <Carousel />
      <Services />
      <WhatsaapButton />
    </>
  )
}
