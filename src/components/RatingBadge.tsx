import { Box, SxProps, Theme } from "@mui/material";
import React from "react";

interface RatingBadgeProps {
  rating: number;
  sizeFactor?: number;
  sx?: SxProps<Theme>;
}

const RatingBadge: React.FC<RatingBadgeProps> = ({
  rating,
  sizeFactor = 1,
  sx = {},
}) => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        transform: `scale(${sizeFactor})`,
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
