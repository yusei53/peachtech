import { Box, Divider, Grid, Typography } from "@mui/material";

const SubHeader = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      py={10}
      px={{ xs: 4, md: 25 }}
      height={{ xs: "35vh", md: "25vh" }}
      sx={{
        backgroundImage: `url("/gallery4.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundBlendMode: "lighten",
      }}
    >
      <Grid container display={"flex"} justifyContent={"flex-end"} spacing={5}>
        <Grid item xs={12} md={4}>
          <Typography fontSize={{ xs: 22, md: 25 }} fontWeight={"bold"}>
            PeachTechの価値観
          </Typography>
          <Divider
            sx={{
              backgroundColor: "#FF539B",
              width: { xs: 190, md: 210 },
              height: 3,
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
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
            PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観
            PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubHeader;
