"use client";

import { Box, Typography, styled } from "@mui/material";
import { isPeachTechText } from "../../../const/documents";
import Heading from "../../common/heading";

const Activity = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
        <Heading title="PeachTechとは" />
        <Typography
          whiteSpace="pre-wrap"
          my={5}
          px={{ xs: 4, sm: 0 }}
          fontSize={{ xs: 10, sm: 16 }}
          textAlign="center"
        >
          Peach.Techは、成蹊大学の大学公認のプログラミングサークルです。
          <br />
          成蹊のエンジニア同士で繋がることができる場所を目指しています。仮の文章。
        </Typography>
      </Box>
      {isPeachTechText.map((text) => (
        <Box
          key={text.number}
          display="flex"
          justifyContent={{
            xs: "center",
            sm: text.number === "01" ? "flex-start" : "flex-end",
          }}
          mx={{ sm: 15 }}
        >
          <StyledCircle>
            <Box px={{ xs: 5, sm: 10 }}>
              <Typography color="#E7EEF4" pt={5} fontSize={{ xs: 40, sm: 75 }}>
                {text.number}
              </Typography>
              <Typography
                component="h3"
                whiteSpace="pre-wrap"
                fontSize={{ xs: 20, sm: 30 }}
              >
                {text.title}
              </Typography>
              <Typography fontSize={{ xs: 10, sm: 16 }} py={{ xs: 2, sm: 4 }}>
                {text.description}
              </Typography>
            </Box>
          </StyledCircle>
        </Box>
      ))}
    </>
  );
};

export default Activity;

const StyledCircle = styled("div")(({ theme }) => ({
  width: 580,
  height: 580,
  backgroundColor: "#FFF4FC",
  borderRadius: "50%",
  [theme.breakpoints.down("sm")]: {
    width: 350,
    height: 350,
  },
}));
