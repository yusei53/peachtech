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
        px={{ xs: 4, sm: 30 }}
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
            <Typography fontSize={{ xs: 13, sm: 15 }}>
              当社は、株主の皆さまに対する利益還元を経営の重要課題として位置づけております。
              株主還元につきましては、事業成長に向けた投資と資本効率向上の最適なバランスを考慮し、総還元性向50％以上を基本方針といたします。配当に関しては、安定的な配当を実現するための指標としてＤＯＥ（株主資本配当率）３％以上を配当方針に据え、過去の配当実績も考慮しながら具体的な配当額を決定いたします
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
            <Typography fontSize={{ xs: 13, sm: 15 }}>
              当社は、株主の皆さまに対する利益還元を経営の重要課題として位置づけております。
              株主還元につきましては、事業成長に向けた投資と資本効率向上の最適なバランスを考慮し、総還元性向50％以上を基本方針といたします。配当に関しては、安定的な配当を実現するための指標としてＤＯＥ（株主資本配当率）３％以上を配当方針に据え、過去の配当実績も考慮しながら具体的な配当額を決定いたします
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
            <Typography fontSize={{ xs: 13, sm: 15 }}>
              当社は、株主の皆さまに対する利益還元を経営の重要課題として位置づけております。
              株主還元につきましては、事業成長に向けた投資と資本効率向上の最適なバランスを考慮し、総還元性向50％以上を基本方針といたします。配当に関しては、安定的な配当を実現するための指標としてＤＯＥ（株主資本配当率）３％以上を配当方針に据え、過去の配当実績も考慮しながら具体的な配当額を決定いたします
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
            <Typography fontSize={{ xs: 13, sm: 15 }}>
              当社は、株主の皆さまに対する利益還元を経営の重要課題として位置づけております。
              株主還元につきましては、事業成長に向けた投資と資本効率向上の最適なバランスを考慮し、総還元性向50％以上を基本方針といたします。配当に関しては、安定的な配当を実現するための指標としてＤＯＥ（株主資本配当率）３％以上を配当方針に据え、過去の配当実績も考慮しながら具体的な配当額を決定いたします
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default QuestionBar;
