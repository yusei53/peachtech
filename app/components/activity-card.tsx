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
    <Card sx={{ maxWidth: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={src}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            textAlign={"center"}
            fontSize={{ xs: 16, md: 22 }}
          >
            {title}
          </Typography>
          <Typography fontSize={{ xs: 12, md: 16 }}>{content}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActivityCard;
