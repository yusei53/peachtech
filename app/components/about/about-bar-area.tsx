import { Box, Grid, Typography } from "@mui/material";
import Heading from "../common/heading";
import { aboutDataProps } from "@/app/const/about-page-data";

type TProps = {
  title: string;
  aboutPageData: aboutDataProps[];
};

const AboutBarArea: React.FC<TProps> = ({ title, aboutPageData }) => {
  return (
    <Box display={"flex"} alignItems={"center"} pt={10} px={{ xs: 4, md: 20 }}>
      <Grid container display={"flex"} spacing={{ sm: 10 }}>
        <Grid item xs={12} md={4}>
          {<Heading title={title} />}
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
          {aboutPageData.map((value: aboutDataProps) => (
            <Box pb={10} key={value.subTitle}>
              <Typography component="h3" fontSize={{ xs: 18, sm: 26 }}>
                {value.subTitle}
              </Typography>
              <Typography
                fontSize={{
                  xs: 12,
                  md: 15,
                }}
                letterSpacing={0.8}
                mt={1}
              >
                {value.description}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutBarArea;
