"use client";

import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const FirstView = () => {
  const images = ["/640x480.png", "/640x480.png"];

  return (
    <Box
      height={{ xs: "50vh", md: "70vh", lg: "88vh" }}
      display="flex"
      justifyContent="center"
      alignItems={{ xs: "start", lg: "center" }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column-reverse", lg: "row" }}
        width="100%"
      >
        <Typography
          component="h4"
          whiteSpace="pre-wrap"
          px={{ md: 5, lg: 10 }}
          py={12}
          display="flex"
          alignItems="end"
          fontSize={{ md: 40, lg: 20 }}
          textAlign="center"
          justifyContent={{ xs: "center", lg: "normal" }}
        >
          {"明日を創造する\n第一歩をともに"}
        </Typography>
        <Box
          width={{ xs: "100%", md: "75%" }}
          height={{ xs: "40vh", sm: "50vh", lg: "80vh" }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
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
    </Box>
  );
};

export default FirstView;
