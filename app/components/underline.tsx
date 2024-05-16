import { FC } from "react";
import { Box } from "@mui/material";

interface UnderlineProps {
  xsWidth?: number;
  mdWidth?: number;
}

const Underline: FC<UnderlineProps> = ({ xsWidth, mdWidth }) => {
  return (
    <Box
      width={{
        xs: xsWidth ? xsWidth : 50,
        md: mdWidth ? mdWidth : 50,
      }}
      height={5}
      bgcolor="#FF539B"
      borderRadius={0.5}
    />
  );
};

export default Underline;
