"use client";
import { Box, Grid, styled } from "@mui/material";
import Heading from "../common/heading";
import { snsData } from "@/app/const/sns";
import CustomLink from "../common/custom-link";
import Image from "next/image";

const SnsIcon = () => {
  return (
    <Box py={{ sx: 2, md: 3 }} px={{ xs: 5, md: 20 }}>
      <Heading title="各種SNS" />
      <Grid container spacing={3} pt={5} px={{ xs: 10, md: 3 }}>
        {snsData.map((data) => (
          <Grid
            key={data.src}
            item
            xs={12}
            sm={6}
            md={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <CustomLink href={data.href} rel>
              <Box
                borderRadius={5}
                boxShadow={
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                }
              >
                <SImage
                  src={data.src}
                  alt="green iguana"
                  width={200}
                  height={200}
                />
              </Box>
            </CustomLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const SImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: 170,
    height: 170,
  },
  [theme.breakpoints.down("sm")]: {
    width: 130,
    height: 130,
  },
}));

export default SnsIcon;
