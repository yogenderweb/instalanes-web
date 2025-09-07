import Image from "next/image";
import styles from "./page.module.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BannerSection from "@/component/Home/BannerSection";
import WhyInstalanes from "@/component/Home/WhyInstalanes";
import SolvingTheBig from "@/component/Home/SolvingTheBig";
import SolutionsSolve from "@/component/Home/SolutionsSolveSection";
import CapabilitiesEnablers from "@/component/Home/CapabilitiesEnablersSection";
import FeaturesSection from "@/component/Home/FeaturesSection";
import SimplifyDigitizeSection from "@/component/Home/SimplifyDigitizeSection";
import Testimonials from "@/component/Home/Testimonials";
import BlogSection from "@/component/Home/BlogSection";
import StreamlineTransportation from "@/component/Home/StreamlineTransportation";
import TalkToUsSection from "@/component/Home/TalkToUsSection";

export default function Home() {
  return (
    <>
      
          <BannerSection />

          <SimplifyDigitizeSection />

          <WhyInstalanes />

          <SolvingTheBig />

          <SolutionsSolve />

          <CapabilitiesEnablers />

          <FeaturesSection />

          <Testimonials />

          <StreamlineTransportation />

          <BlogSection />

          <TalkToUsSection />

    </>
  );
}
