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
    <Box display={"flex"} alignItems={"flex-start"} py={3}>
      <Box flex={3.5} display={"flex"} justifyContent={"center"}>
        <Image
          width={450}
          height={300}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          src={src}
          alt="achievement-image"
        />
      </Box>
      <Box
        flex={6.5}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        px={5}
      >
        <Typography fontSize={{ xs: 10, md: 16 }}>{date}</Typography>
        <Typography fontSize={{ xs: 12, md: 22 }} fontWeight={"bold"} mb={1}>
          {title}
        </Typography>
        <Typography fontSize={{ xs: 10, md: 16 }}>{content}</Typography>
      </Box>
    </Box>
  );
};

export default AchievementCard;
