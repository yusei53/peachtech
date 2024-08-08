import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { activityContentDataProps } from "../../../const/activity-content-data";

const ActivityCard: React.FC<activityContentDataProps> = ({
  src,
  title,
  content,
}) => {
  return (
    <Card
      sx={{
        height: { xs: "200px", sm: "250px" },
        aspectRatio: "6 / 7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 4,
      }}
    >
      <Box width={{ xs: "70px", sm: "100px" }} mx={3} mt={3}>
        <CardMedia component="img" image={src} alt={title} />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          gutterBottom
          textAlign={"center"}
          fontSize={{ xs: 16, md: 20 }}
          whiteSpace={"nowrap"}
        >
          {title}
        </Typography>
        <Typography fontSize={{ xs: 10, md: 13 }}>{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
