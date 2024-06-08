import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <Grid
      container
      bgcolor={"#eeeeee"}
      display={"flex"}
      justifyContent={"flex-start"}
      flexDirection={"column"}
      px={{ xs: 10, md: 20, lg: 35 }}
      py={8}
    >
      <Grid item>
        <Image src="/peachtech.png" alt="logo" width={75} height={75} />
      </Grid>
      <Grid item>
        <Grid
          container
          display={"flex"}
          justifyContent={{ xs: "flex-start", sm: "flex-start" }}
          alignItems={{ md: "flex-start" }}
          flexDirection={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 5 }}
        >
          <Grid item xs={12} md={6}>
            <Typography fontSize={{ xs: 12, md: 16 }}>
              成蹊大学プログラミングサークル
              <br />
              Peach Tech
            </Typography>

            <Typography mt={1} color={"gray"} fontSize={{ xs: 10, md: 12 }}>
              〒170-8633 <br />
              東京都武蔵野市吉祥寺北町３丁目３−１
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontSize={{ xs: 12, md: 16 }}>Contact Us</Typography>
            <Link href="/" sx={{ color: "gray" }} fontSize={{ xs: 10, md: 12 }}>
              お問い合わせ
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontSize={{ xs: 12, md: 16 }}>Follow Us</Typography>
            <Box display={"flex"} justifyContent={"flex-start"} gap={0.5}>
              <Link href="https://x.com/PeachTech_0927">
                <XIcon sx={{ color: "black" }} />
              </Link>
              <Link href="https://www.instagram.com/peachtech_0927/">
                <InstagramIcon sx={{ color: "secondary.main" }} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontSize={{ xs: 12, md: 16 }}>Developers</Typography>
            <Typography color={"gray"} fontSize={{ xs: 10, md: 12 }}>
              そら
              <br />
              あい
              <br />
              ひかり
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
