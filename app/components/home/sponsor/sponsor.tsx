import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import Heading from "../../common/heading";

const Sponsor = () => {
  return (
    <Box bgcolor={"#FFF4FC"} py={10} px={{ xs: 5, md: 30 }}>
      <Heading title="Sponsor" />
      <Box display={"flex"} justifyContent={"center"} pt={5}>
        <Card sx={{ width: { xs: 150, md: 350 }, borderRadius: "20px" }}>
          <CardMedia
            sx={{ height: { xs: 150, md: 350 } }}
            image="/techtrain-logo.jpeg"
          />
        </Card>
      </Box>
    </Box>
  );
};

export default Sponsor;
