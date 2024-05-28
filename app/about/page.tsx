import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Image
          src="/1920x320.png"
          width={1920}
          height={320}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          alt="Picture of the author"
        />
      </Box>
    </>
  );
};

export default page;
