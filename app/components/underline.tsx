import { FC } from "react";
import { Box } from "@mui/material";

interface UnderlineProps {
  xsWidth?: number;
  smWidth?: number;
  mdWidth?: number;
  lgWidth?: number;
}

const Underline: FC<UnderlineProps> = ({
  xsWidth,
  smWidth,
  mdWidth,
  lgWidth,
}) => {
  return (
    <Box
      width={{
        xs: xsWidth ? xsWidth : 50,
        sm: smWidth ? smWidth : 50,
        md: mdWidth ? mdWidth : 50,
        lg: lgWidth ? lgWidth : 50,
      }}
      height={5}
      bgcolor="#FF539B"
      borderRadius={0.5}
    />
  );
};

export default Underline;
