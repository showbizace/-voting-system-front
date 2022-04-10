import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography>
        © Here is my project free to download{" "}
        <Link href="#">
          <a>Download PDF my project </a>
        </Link>{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
