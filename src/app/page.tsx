import { Hero } from "@/components/home/Hero";
import { USPStrip } from "@/components/home/USPStrip";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <USPStrip />
      <ServicesPreview />
      <AboutPreview />
      <DoctorsPreview />
    </>
  );
}
