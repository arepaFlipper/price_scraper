"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imgUrl: "/assets/images/hero-4.svg", alt: "air fryer" },
  { imgUrl: "/assets/images/hero-5.svg", alt: "chair" },
  { imgUrl: "/assets/images/hero-1.svg", alt: "smartwatch" },
  { imgUrl: "/assets/images/hero-2.svg", alt: "bag" },
  { imgUrl: "/assets/images/hero-3.svg", alt: "lamp" },
]

type THeroCarousel = {}

const HeroCarousel = ({ }: THeroCarousel) => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false}>
      {heroImages.map((image, idx) => {
        return (
          <Image src={image.imgUrl} alt={image.alt} key={idx} width={484} height={484} className="object-contain" />
        )
      })}
    </Carousel>
  )
}

export default HeroCarousel
