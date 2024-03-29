import * as React from "react";
import { Typography } from "@mui/material";
import imgLogo from "@/static/img/anthor-logo-light.webp";

const Logo: React.FC = () => {
  return (
    <Typography sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      <img src={imgLogo} alt="DanFlix" style={{ maxHeight: "30px" }} />
    </Typography>
  );
};

export default Logo;
