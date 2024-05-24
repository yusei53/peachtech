import { achievementDataProps } from "@/app/const/achievement-data";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AchievementCard: React.FC<achievementDataProps> = ({
  src,
  date,
  title,
  content,
}) => {
  return (
    <Box display={"flex"} width={"80%"}>
      <Box>
        <Image width={450} height={300} src={src} alt="" />
      </Box>
      <Box px={7} display={"flex"} flexDirection={"column"} gap={2}>
        <Typography fontSize={{ xs: 10, md: 20 }}>{date}</Typography>
        <Typography
          gutterBottom
          fontSize={{ xs: 12, md: 24 }}
          fontWeight={"bold"}
        >
          {title}
        </Typography>
        <Typography fontSize={{ xs: 10, md: 20 }}>{content}</Typography>
      </Box>
    </Box>
  );
};

export default AchievementCard;
