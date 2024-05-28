import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Heading from "./common/heading";
import { Description } from "@mui/icons-material";

const QuestionBar = () => {
  return (
    <Box display="flex" flexDirection={"column"} alignItems={"center"} py={10}>
      <Heading title="よくある質問" />

      <Box
        width={"60%"}
        display={"flex"}
        flexDirection={"column"}
        margin={"0 auto"}
        py={5}
      >
        <Accordion sx={{ mb: 5 }}>
          <AccordionSummary
            expandIcon={<ChevronRightIcon sx={{ mr: 1 }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              flexDirection: "row-reverse",
              "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(90deg)",
              },
            }}
          >
            <Typography>質問１</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mb: 5 }}>
          <AccordionSummary
            expandIcon={<ChevronRightIcon sx={{ mr: 1 }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ flexDirection: "row-reverse" }}
          >
            <Typography>質問1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mb: 5 }}>
          <AccordionSummary
            expandIcon={<ChevronRightIcon sx={{ mr: 1 }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              flexDirection: "row-reverse",
              "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(90deg)",
              },
            }}
          >
            <Typography>質問１</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mb: 5 }}>
          <AccordionSummary
            expandIcon={<ChevronRightIcon sx={{ mr: 1 }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              flexDirection: "row-reverse",
              "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(90deg)",
              },
            }}
          >
            <Typography>質問１</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default QuestionBar;
