import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

type TProps = {
  title: string;
  comment: string;
};

const AboutCommentArea: React.FC<TProps> = ({ title, comment }) => {
  return (
    <Box display="flex" justifyContent={"center"} alignItems="center">
      <Box
        height={{ xs: 350, sm: 200 }}
        width={{ xs: 250, sm: 800 }}
        my={4}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        p={5}
        sx={{ border: "1px solid grey" }}
      >
        <Grid
          container
          display={"flex"}
          justifyContent={"flex-end"}
          spacing={5}
        >
          <Grid item xs={12} md={3}>
            <Box display={"flex"} justifyContent={"center"} alignItems="center">
              <Image src="/peachtech.png" alt="logo" width={180} height={180} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            px={{ xs: 1, md: 5 }}
          >
            <Typography
              component="h3"
              fontWeight={"bold"}
              fontSize={{ xs: 18, sm: 26 }}
            >
              {title}
            </Typography>
            <Typography
              fontSize={{
                xs: 12,
                md: 16,
              }}
              letterSpacing={0.8}
              fontWeight={"bold"}
            >
              {comment}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutCommentArea;
