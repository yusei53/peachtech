import { Box, Typography } from "@mui/material";
import { isPeachTechText } from "../const/documents";

const Activity = () => {
  return (
    <Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={20}>
        <Typography fontSize={{ xs: 20, sm: 30 }}>PeachTechとは</Typography>
        <Box
          sx={{
            width: 40,
            height: 5,
            bgcolor: "#FF539B",
            borderRadius: 0.5,
          }}
        />
        <Typography
          whiteSpace="pre-wrap"
          mt={5}
          px={{ xs: 4, sm: 0 }}
          fontSize={{ xs: 10, sm: 16 }}
          textAlign="center"
        >
          {
            "Peach.Techは、成蹊大学の大学公認のプログラミングサークルです。\n成蹊のエンジニア同士で繋がることができる場所を目指しています。仮の文章。"
          }
        </Typography>
      </Box>
      {isPeachTechText.map((text) => (
        <Box
          key={text.number}
          display="flex"
          justifyContent={{
            xs: "center",
            sm: text.number === "01" ? "flex-start" : "flex-end",
          }}
          mx={{ sm: 5 }}
          my={{ xs: 3, sm: 5 }}
        >
          <Box
            width={{ xs: 370, sm: 700 }}
            height={{ xs: 370, sm: 700 }}
            bgcolor="#FFF4FC"
            borderRadius="50%"
          >
            <Typography
              color="#E7EEF4"
              px={{ xs: 5, sm: 10 }}
              pt={{ xs: 5, sm: 5 }}
              pb={{ xs: 1, sm: 5 }}
              fontSize={{ xs: 40, sm: 70 }}
            >
              {text.number}
            </Typography>
            <Typography
              whiteSpace="pre-wrap"
              pl={{ xs: 10, sm: 20 }}
              fontSize={{ xs: 20, sm: 30 }}
            >
              {text.title}
            </Typography>
            <Typography
              fontSize={{ xs: 10, sm: 16 }}
              px={{ xs: 6, sm: 10 }}
              py={{ xs: 2, sm: 8 }}
            >
              {text.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Activity;
