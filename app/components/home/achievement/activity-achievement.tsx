import { Box, Divider, Grid } from "@mui/material";
import { achievementContentData } from "@/app/const/achievement-data";
import AchievementCard from "./achievement-card";
import React from "react";
import Heading from "../../common/heading";

const ActivityAchievement = () => {
  return (
    <Box py={13} px={{ xs: 5, md: 5 }}>
      <Heading title="活動実績" />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        px={10}
      >
        {achievementContentData.map((data) => (
          <React.Fragment key={data.src}>
            <AchievementCard
              src={data.src}
              date={data.date}
              title={data.title}
              content={data.content}
            />
            <Divider sx={{ width: "100%" }} color={"black"} />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default ActivityAchievement;
