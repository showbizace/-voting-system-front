import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/logo.png";

const LogoIcon = () => {
  return (
    <Link href="https://www.imnu.edu.cn/" target={"_blank"}>
      <Image src={LogoDark} alt="logo" />
    </Link>
  );
};

export default LogoIcon;
