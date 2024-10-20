import { Box, Grid, Typography } from "@mui/material";
import Heading from "../common/heading";
import { aboutDataProps } from "@/app/const/about-page-data";

type TProps = {
  title: string;
  aboutPageData: aboutDataProps[];
};

const AboutBarArea: React.FC<TProps> = ({ title, aboutPageData }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      pt={{ xs: 4, md: 10 }}
      px={{ xs: 4, md: 20 }}
    >
      <Grid container display={"flex"} spacing={{ sm: 10 }}>
        <Grid
          item
          xs={12}
          md={4}
          display={{ xs: "flex", md: "block" }}
          justifyContent={{ xs: "flex-start", md: "center" }}
          p={{ xs: 2, md: 0 }}
        >
          <Heading title={title} />
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
            <Box pb={{ xs: 6, md: 10 }} key={value.subTitle}>
              <Typography component="h3" fontSize={{ xs: 18, sm: 20 }}>
                {value.subTitle}
              </Typography>
              <Typography
                fontSize={{
                  xs: 11,
                  md: 13,
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
