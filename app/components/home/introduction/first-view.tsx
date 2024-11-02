"use client";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import * as THREE from "three";
import Three from "./three";

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
      position={"relative"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={{ xs: "column-reverse", md: "row" }}
      height={"100vh"}
      mt={{ md: 5 }}
    >
      <Box position={"absolute"} top={70} zIndex={200}>
        <Three />
      </Box>

      <Box
        position={"absolute"}
        top={60}
        right={40}
        width={{ xs: "100%", md: "55%" }}
        height={{ xs: "40vh", md: "65vh" }}
        ml={{ md: 5 }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          style={{ width: "100%", height: "100%" }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                fill
                src={src}
                alt={`Slide ${index}`}
                style={{ objectFit: "cover", borderRadius: 4 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default FirstView;
