import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Heading from "../common/heading";

const FormBar = () => {
  return (
    <Box display="flex" flexDirection={"column"} alignItems={"center"} py={10}>
      <Heading title="参加方法" />
      <Box width={"75%"} mt={5}>
        <Divider color="black" />
        <Box p={3}>
          <Typography fontSize={{ xs: 19, sm: 24 }} mb={2}>
            参加フォーム
          </Typography>
          <Link
            href="https://mui.com/material-ui/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none", color: "black" }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Typography fontSize={{ xs: 15, sm: 20 }}>
                参加フォームにご回答いただいた後、メールアドレス宛にdiscordの招待リンクを送信します
              </Typography>
              <ChevronRightIcon fontSize="medium" />
            </Box>
          </Link>
        </Box>
        <Divider color="black" />
      </Box>
    </Box>
  );
};

export default FormBar;
