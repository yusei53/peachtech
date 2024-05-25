import { Box, Typography } from "@mui/material";

type Tprops = {
  title: string;
};

const Heading: React.FC<Tprops> = ({ title }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Typography component="h3" fontSize={{ xs: 20, sm: 30 }}>
        {title}
      </Typography>
      <Box
        width={{
          xs: 40,
          md: 70,
        }}
        height={5}
        bgcolor="#FF539B"
        borderRadius={0.5}
      />
    </Box>
  );
};

export default Heading;
