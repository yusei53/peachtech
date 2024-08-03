import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { activityContentDataProps } from "../../../const/activity-content-data";

const ActivityCard: React.FC<activityContentDataProps> = ({
  src,
  title,
  content,
}) => {
  return (
    <Card sx={{ width: {xs: "140px", sm: "260px"}, height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{width: "100px", marginX: 3, marginTop: 3}}>
        <CardMedia component="img" image={src} alt="green iguana" />
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
        <Typography fontSize={{ xs: 12, md: 15 }}>{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
