import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { activityContentDataProps } from "../../../const/activity-content-data";
import Image from "next/image";

const ActivityCard: React.FC<activityContentDataProps> = ({
  src,
  title,
  content,
}) => {
  return (
    <Card
      sx={{
        height: 220,
        minWidth: { xs: 150, sm: 200 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 4,
      }}
    >
      <Box mx={3} mt={3}>
        <Image src={src} alt={title} width={80} height={80} />
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
          fontSize={16}
          whiteSpace={"nowrap"}
        >
          {title}
        </Typography>
        <Typography fontSize={{ xs: 10, md: 12 }}>{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
