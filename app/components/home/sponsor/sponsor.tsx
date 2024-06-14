"use client";
import { Box, styled } from "@mui/material";
import Heading from "../../common/heading";
import Image from "next/image";

const Sponsor = () => {
  return (
    <Box bgcolor={"#FFF4FC"} py={10} px={{ xs: 5, md: 30 }}>
      <Heading title="Sponsor" />
      <Box display={"flex"} justifyContent={"center"} pt={5}>
        <Box
          bgcolor={"white"}
          borderRadius={{ xs: 6, md: 10 }}
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
          }
        >
          <SImage
            src="/techtrain-skeleton-logo.png"
            alt="logo"
            width={300}
            height={300}
          />
        </Box>
      </Box>
    </Box>
  );
};

const SImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: 170,
    height: 170,
  },
  [theme.breakpoints.down("sm")]: {
    width: 120,
    height: 120,
  },
}));

export default Sponsor;
