"use client";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import ThreejsText from "./threejs-text";

const FirstView = () => {
  const images = [
    "/home1.jpg",
    "/home2.png",
    "/home3.jpg",
    "/home4.jpg",
    "/home5.png",
    "/home6.jpg",
    "/home7.jpg",
  ];

  return (
    <Box
      position={{ md: "relative" }}
      display={"flex"}
      alignItems={"center"}
      flexDirection={{ xs: "column", md: "row" }}
      height={{ xs: "70vh", md: "100vh" }}
      mt={{ md: 5 }}
    >
      <Box position={{ md: "absolute" }} top={{ md: 70 }} zIndex={200}>
        <ThreejsText />
      </Box>
      <Box
        position={{ md: "absolute" }}
        top={{ md: 60 }}
        right={{ md: 40 }}
        width={{ xs: "100%", md: "55%" }}
        height={{ xs: "24vh", md: "65vh" }}
        ml={{ md: 5 }}
      >
        <Swiper
          loop={true}
          loopAdditionalSlides={1}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          onInit={(swiper) => {
            if (swiper.wrapperEl) {
              swiper.wrapperEl.style.transitionTimingFunction = "linear";
            }
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
          }}
          modules={[Grid, Pagination, Autoplay]}
          style={{
            width: "100%",
            height: "100%",
          }}
          cssMode={false}
          allowTouchMove={false}
        >
          {images.map((src) => (
            <SwiperSlide key={src}>
              <Image
                fill
                src={src}
                alt={"image"}
                style={{
                  objectFit: "cover",
                  borderRadius: 15,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default FirstView;
