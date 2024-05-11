import { Box, AppBar, Toolbar, Typography, Link } from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <AppBar position="static" color="inherit" sx={{ bgcolor: "white" }}>
      <Toolbar>
        <Box flexGrow={1} display={"flex"} alignItems={"center"}>
          <Image src="/peachtech.png" alt="logo" width={50} height={50} />
          <Typography color={"black"} fontSize={22}>
            PeachTech
          </Typography>
        </Box>
        <Link
          href="/"
          underline="none"
          color={"black"}
          px={1}
          sx={{ cursor: "pointer" }}
        >
          home
        </Link>
        <Link
          href="/about"
          underline="none"
          color={"black"}
          px={1}
          sx={{ cursor: "pointer" }}
        >
          about
        </Link>
        <Link
          href="/contact"
          underline="none"
          color={"black"}
          px={1}
          sx={{ cursor: "pointer" }}
        >
          contact
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
