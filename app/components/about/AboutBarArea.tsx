import { Box, Divider, Grid, Typography } from "@mui/material";
import Heading from "../common/heading";
import { FunctionComponent } from "react";

type Tprops = {
  title: string;
  subTitle: string;
  description: string;
  displayValues: boolean;
};

export const AboutBarArea: React.FC<Tprops> = ({
  title,
  subTitle,
  description,
  displayValues,
}) => {
  return (
    <Box display={"flex"} alignItems={"center"} py={10} px={{ xs: 4, md: 25 }}>
      <Grid container display={"flex"} spacing={{ sm: 3 }}>
        <Grid item xs={12} md={4}>
          {displayValues && <Heading title={title} />}
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          px={{ xs: 2, md: 10 }}
        >
          <Typography
            component="h3"
            fontWeight={"bold"}
            fontSize={{ xs: 18, sm: 26 }}
          >
            {subTitle}
          </Typography>
          <Typography
            fontSize={{
              xs: 12,
              md: 16,
            }}
            letterSpacing={0.8}
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutBarArea;
