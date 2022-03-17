import { Box, SxProps, Theme } from "@mui/material";
import React from "react";

interface RatingBadgeProps {
  rating: number;
  sx?: SxProps<Theme>;
}

const RatingBadge: React.FC<RatingBadgeProps> = ({ rating, sx = {} }) => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        fontWeight: 700,
        color: "#fff",
        ...sx,
      }}
    >
      <Box sx={{ marginTop: "9px", marginLeft: "-2px" }}>{rating}</Box>
    </Box>
  );
};

export default RatingBadge;
