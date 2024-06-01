import { achievementDataProps } from "@/app/const/achievement-data";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const AchievementCard: React.FC<achievementDataProps> = ({
  src,
  date,
  title,
  content,
}) => {
  return (
    <Grid
      container
      display={"flex"}
      alignItems={"flex-start"}
      py={3}
      spacing={2}
    >
      <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
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
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Typography fontSize={{ xs: 10, md: 16 }}>{date}</Typography>
        <Typography fontSize={{ xs: 12, md: 22 }} fontWeight={"bold"} mb={1}>
          {title}
        </Typography>
        <Typography fontSize={{ xs: 10, md: 16 }} letterSpacing={{ md: 1 }}>
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AchievementCard;