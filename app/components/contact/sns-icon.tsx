import { Box, Link, Grid, Card, CardMedia } from "@mui/material";
import Heading from "../common/heading";
import { snsData } from "@/app/const/sns";
import CustomLink from "../common/custom-link";

const SnsIcon = () => {
  return (
    <Box py={10} px={{ xs: 5, md: 20 }}>
      <Heading title="各種SNS" />
      <Grid container spacing={{ xs: 6 }} pt={5} px={{ xs: 10, md: 1 }}>
        {snsData.map((data) => (
          <Grid
            key={data.src}
            item
            xs={12}
            sm={6}
            md={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <CustomLink href={data.href} rel>
              <Card
                sx={{
                  width: { xs: 195, lg: 240 },
                  borderRadius: "20px",
                }}
              >
                <CardMedia
                  component={"img"}
                  sx={{ height: { xs: 195, lg: 240 } }}
                  image={data.src}
                  alt="green iguana"
                />
              </Card>
            </CustomLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SnsIcon;
