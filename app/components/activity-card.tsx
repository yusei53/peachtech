import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

type TProps = {
  src: string;
  title: string;
  content: string;
};

const ActivityCard: React.FC<TProps> = ({ src, title, content }) => {
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
