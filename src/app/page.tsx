import { Hero } from "@/components/home/Hero";
import { USPStrip } from "@/components/home/USPStrip";
import { TreatmentsPreview } from "@/components/home/TreatmentsPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <USPStrip />
      <TreatmentsPreview />
      <AboutPreview />
      <DoctorsPreview />
    </>
  );
}
