import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Link, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      bgcolor={"#eeeeee"}
      display={"flex"}
      justifyContent={{ xs: "flex-start", sm: "center" }}
      flexDirection={"column"}
      px={{ xs: 10, md: 20, lg: 35 }}
    >
      <Box>
        <Image src="/peachtech.png" alt="logo" width={75} height={75} />
      </Box>

      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        gap={{ xs: 5 }}
      >
        <Box>
          <Typography fontSize={{ xs: 12, md: 20 }}>Peach Tech</Typography>

          <Typography mt={1} color={"gray"} fontSize={{ xs: 10, md: 16 }}>
            〒170-8633 <br />
            東京都武蔵野市吉祥寺北町３丁目３−１
          </Typography>
        </Box>
        <Box>
          <Typography fontSize={{ xs: 12, md: 20 }}>Contact Us</Typography>
          <Link href="/" sx={{ color: "gray" }} fontSize={{ xs: 10, md: 16 }}>
            お問い合わせ
          </Link>
        </Box>
        <Box>
          <Typography fontSize={{ xs: 12, md: 20 }}>Follow Us</Typography>
          <Box display={"flex"} justifyContent={"flex-start"} gap={0.5}>
            <Link href="https://x.com/PeachTech_0927">
              <XIcon sx={{ color: "black" }} />
            </Link>
            <Link href="https://www.instagram.com/peachtech_0927/">
              <InstagramIcon sx={{ color: "secondary.main" }} />
            </Link>
          </Box>
        </Box>
        <Box>
          <Typography fontSize={{ xs: 12, md: 20 }}>Developers</Typography>
          <Typography color={"gray"} fontSize={{ xs: 10, md: 16 }}>
            そら
            <br />
            あい
            <br />
            ひかり
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
