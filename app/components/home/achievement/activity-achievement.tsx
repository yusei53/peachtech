import { Box, Divider, Grid } from "@mui/material";
import Heading from "../common/heading";
import { achievementContentData } from "@/app/const/achievement-data";
import AchievementCard from "./achievement-card";
import React from "react";

const ActivityAchievement = () => {
  return (
    <Box py={13} px={{ xs: 5, md: 5 }}>
      <Heading title="活動実績" />

      <Grid container spacing={{ xs: 2, md: 10 }} pt={15}>
        {achievementContentData.map((data) => (
          <React.Fragment key={data.src}>
            <Grid
              item
              md={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              margin={"0 auto"}
            >
              <AchievementCard
                src={data.src}
                date={data.date}
                title={data.title}
                content={data.content}
              />
              <Divider sx={{ width: "80%" }} color={"black"} />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default ActivityAchievement;
