"use client";
import { Box, Typography } from "@mui/material";
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
      display={"flex"}
      position={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
      height={{ xs: "38vh", md: "82vh" }}
      width={"100%"}
    >
      <Box
        position={"absolute"}
        top={0}
        left={0}
        width={{ xs: "100%", md: "100%" }}
        //ここを100にすると画面いっぱい。70にすると画面下の余白ができる
        // height={{ xs: "100%", md: "100vh" }}
        height={{ xs: "30vh", md: "70vh" }}
        bgcolor="rgba(0, 0, 0, 1)" // 半透明な黒
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
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 0,
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
                  zIndex: -1,
                  opacity: 0.5,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          textAlign="center"
          zIndex={2}
          color="white"
          sx={{ transform: "translate(-50%, -50%)" }}
        >
          <Typography
            variant="h2"
            fontFamily="-apple-system"
            letterSpacing={3}
            mt="5rem"
            mb="1rem"
            sx={{
              color: "white",
              fontSize: { xs: "2rem", md: 38 },
              fontWeight: "bold",
            }}
          >
            PeachTech
          </Typography>

          <Typography
            variant="subtitle1"
            fontFamily="Arial"
            letterSpacing={4}
            sx={{
              color: "white",
              fontSize: { xs: "1rem", md: 26 },
              mt: 2, // 上に少し間隔を空ける
            }}
          >
            〜明日を創造する第一歩をともに〜
          </Typography>
          {/* <Box sx={{ mt: 1 }}>
            <ThreejsText />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default FirstView;
