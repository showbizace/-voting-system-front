import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const download = () => {
    fetch("/public/diploma/毕力格赛汗.docx").then((res) => {
      res.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let r = document.createElement("a");
        r.href = url;
        r.download = "毕力格赛汗.docx";
        r.click();
      });
    });
  };
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography>
        © Here is my project free to download{" "}
        <a onClick={download} href="#">
          <a>Download PDF my project </a>
        </a>{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
