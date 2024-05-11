import { Box, Typography } from "@mui/material";

const element = [
  {
    index: "01",
    title: "成蹊大学初の\nプログラミングサークル",
    description:
      "名刺交換やメールのやりとりから誰と誰がつながっているかが可視化され、これまで気付けなかった思いがけない人脈に気付けるようになります。さらに、キーパーソンの人事異動や、受注につながる企業、カギになる商談履歴といったさまざまなビジネス機会に気付けるようになり、営業のチャンスを広げられます。名刺交換やメールのやりとりから誰と誰がつながっているかが可視化され、",
  },
  {
    index: "02",
    title: "活動内容",
    description:
      "名刺交換やメールのやりとりから誰と誰がつながっているかが可視化され、これまで気付けなかった思いがけない人脈に気付けるようになります。さらに、キーパーソンの人事異動や、受注につながる企業、カギになる商談履歴といったさまざまなビジネス機会に気付けるようになり、営業のチャンスを広げられます。名刺交換やメールのやりとりから誰と誰がつながっているかが可視化され、",
  },
];

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
      {element.map((e) => (
        <Box
          key={e.index}
          display={{ sm: "flex" }}
          justifyContent={e.index === "01" ? "flex-start" : "flex-end"}
          mx={{ xs: 1, sm: 5 }}
          my={{ xs: 3, sm: 5 }}
        >
          <Box
            width={{ xs: 380, sm: 700 }}
            bgcolor="#FFF4FC"
            borderRadius="50%"
            sx={{ aspectRatio: "1/1" }}
          >
            <Typography
              color="#E7EEF4"
              px={{ xs: 5, sm: 10 }}
              pt={{ xs: 5, sm: 5 }}
              pb={{ xs: 1, sm: 5 }}
              fontSize={{ xs: 40, sm: 70 }}
            >
              {e.index}
            </Typography>
            <Typography
              whiteSpace="pre-wrap"
              pl={{ xs: 10, sm: 20 }}
              fontSize={{ xs: 20, sm: 30 }}
            >
              {e.title}
            </Typography>
            <Typography
              fontSize={{ xs: 10, sm: 16 }}
              px={{ xs: 6, sm: 10 }}
              py={{ xs: 2, sm: 8 }}
            >
              {e.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Activity;
