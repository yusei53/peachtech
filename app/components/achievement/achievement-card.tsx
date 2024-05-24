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
      <Box
        width={{ xs: 360, md: 450 }}
        height={{ xs: 240, md: 300 }}
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
      >
        <Image
          width={450}
          height={300}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          src={src}
          alt=""
        />
      </Box>
      <Box
        width={{ xs: 450, md: 600 }}
        px={7}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
      >
        <Typography fontSize={{ xs: 10, md: 20 }}>{date}</Typography>
        <Typography
          gutterBottom
          fontSize={{ xs: 12, md: 24 }}
          fontWeight={"bold"}
        >
          {title}
        </Typography>
        <Typography fontSize={{ xs: 10, md: 15, lg: 20 }}>{content}</Typography>
      </Box>
    </Box>
  );
};

export default AchievementCard;
