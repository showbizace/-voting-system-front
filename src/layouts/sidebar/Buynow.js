import React from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import sidebarBuynowsvg from "../../../assets/images/backgrounds/sidebar-buynow-bg.svg";

const Buynow = () => (
  <Box pb={5} mt={5}>
    <Box
      pl={3}
      pr={3}
      m={1}
      textAlign="center"
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.light,
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Image
        src={sidebarBuynowsvg}
        alt={sidebarBuynowsvg}
        className="buyNowImg"
      />
      <Box pb={3} pt={3}>
        <Typography variant="h4" fontWeight="700" mb={2}>
          Download my work
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          target="_blank"
          href="#"
          sx={{ marginBottom: "10px" }}
        >
          Download
        </Button>
      </Box>
    </Box>
  </Box>
);
export default Buynow;
