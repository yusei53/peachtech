import { Box, Divider, Grid, Typography } from "@mui/material";
import Heading from "../common/heading";

const Vision = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      py={10}
      px={{ xs: 4, md: 25 }}
      height={{ xs: "35vh", md: "25vh" }}
    >
      <Grid container display={"flex"} spacing={{ xs: 0, sm: 3 }}>
        <Grid item xs={12} md={4}>
          <Heading title="Vision" />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          px={{ xs: 2, md: 10 }}
        >
          <Typography component="h3" fontSize={{ xs: 20, sm: 26 }}>
            Vision
          </Typography>
          <Typography
            fontSize={{
              xs: 12,
              md: 16,
            }}
            letterSpacing={0.8}
            fontWeight={"bold"}
          >
            PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観
            PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観
            PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観
            PeachTechの価値観PeachTechの価値観PeachTechの価値観
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Vision;
