import React from "react";
import generateData from "./data";
import SlideItem from "./slideItem";
import Swiper from "react-id-swiper/lib/ReactIdSwiper.full";

const ManipulatingSwiper = () => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 2,
    slideActiveClass: "swiper-slide-active",
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 0,
      stretch: 10,
      depth: 100,
      modifier: 1,
      slideShadows: false
    },
    breakpoints: {
      1024: {
        coverflowEffect: {
          rotate: 0,
          stretch: -25,
          depth: 50,
          modifier: 1,
          slideShadows: false
        }
      }
    }
  };

  const renderItem = ({ idx, plano, investimento, bonus, image, whatsApp }) => (
    <SlideItem
      key={`slide_${idx}`}
      plano={plano}
      investimento={investimento}
      bonus={bonus}
      image={image}
      whatsApp={whatsApp}
    />
  );

  return <Swiper {...params}>{generateData().map(renderItem)}</Swiper>;
};

export default ManipulatingSwiper;
