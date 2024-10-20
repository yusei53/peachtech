"use client";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

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
      display={"flex"}
      alignItems={"center"}
      flexDirection={{ xs: "column-reverse", md: "row" }}
      my={{ md: 5 }}
    >
      <Typography
        component="h2"
        px={{ md: 5, lg: 10 }}
        pt={15}
        fontSize={{ xs: 20, md: 28 }}
      >
        明日を創造する
        <br />
        第一歩をともに
      </Typography>
      <Box
        width={{ xs: "100%", md: "65%" }}
        height={{ xs: "40vh", md: "70vh" }}
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
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                fill
                src={src}
                alt={`Slide ${index}`}
                style={{ objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default FirstView;
