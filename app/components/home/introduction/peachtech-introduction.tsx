"use client";

import { Box, Typography, styled } from "@mui/material";
import { isPeachTechText } from "../../../const/documents";
import Heading from "../../common/heading";
import Image from "next/image";

const PeachTechIntroduction = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={10}
      >
        <Heading title={"PeachTechとは"} />
        <Typography
          whiteSpace={"pre-wrap"}
          my={5}
          px={{ xs: 4, sm: 0 }}
          fontSize={{ xs: 10, sm: 16 }}
          textAlign={"center"}
        >
          Peach.Techは、成蹊大学の大学公認のプログラミングサークルです。
          <br />
          成蹊のエンジニア同士で繋がることができる場所を目指しています。
        </Typography>
      </Box>
      {isPeachTechText.map((text) => (
        <Box
          key={text.number}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={text.number == "02" ? "row-reverse" : "row"}
          mx={5}
          py={{ xs: 2, sm: 5 }}
        >
          <Box mx={{ sm: 5 }} order={{ xs: 2, sm: 1 }}>
            <StyledCircle>
              <Box px={{ xs: 5, sm: 10 }}>
                <Typography
                  color={"#E7EEF4"}
                  pt={5}
                  fontSize={{ xs: 40, sm: 75 }}
                >
                  {text.number}
                </Typography>
                <Typography
                  component={"h3"}
                  whiteSpace={"pre-wrap"}
                  fontSize={{ xs: 18, sm: 20 }}
                >
                  {text.title}
                </Typography>
                <Typography
                  fontSize={{ xs: 11, sm: 14 }}
                  py={2}
                  letterSpacing={1}
                >
                  {text.description}
                </Typography>
              </Box>
            </StyledCircle>
          </Box>
          <Box
            order={{ xs: 1, sm: 2 }}
            mb={{ xs: 4, sm: 0 }}
            display={{ sm: "block" }}
          >
            <Image
              src={text.src}
              alt={"Picture of the author"}
              layout={"responsive"}
              width={375}
              height={375}
            />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default PeachTechIntroduction;

const StyledCircle = styled("div")(({ theme }) => ({
  width: 530,
  height: 530,
  backgroundColor: "#FFF4FC",
  borderRadius: "50%",
  [theme.breakpoints.down("sm")]: {
    width: 350,
    height: 350,
  },
}));
