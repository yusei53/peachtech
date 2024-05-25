import { Box, Grid, Typography } from "@mui/material";
import Heading from "./common/heading";
import ActivityCard from "./activity-card";
import { cardContentData } from "../const/card-content-data";

const ActivityContent = () => {
  return (
    <Box bgcolor={"#FFF4FC"} py={10} px={{ xs: 5, md: 35 }}>
      <Heading title="活動内容" />
      <Grid container spacing={{ xs: 2, md: 10 }} pt={5}>
        {cardContentData.map((data) => (
          <Grid
            key={data.title}
            item
            xs={6}
            md={4}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ActivityCard
              src={data.src}
              title={data.title}
              content={data.content}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ActivityContent;
