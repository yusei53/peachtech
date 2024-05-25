import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { cardContentDataProps } from "../const/card-content-data";

const ActivityCard: React.FC<cardContentDataProps> = ({
  src,
  title,
  content,
}) => {
  return (
    <Card sx={{ minWidth: "auto", height: "100%" }}>
      <CardMedia component="img" image={src} alt="green iguana" />
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
