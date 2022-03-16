import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

type PageProps = {
  title: string;
};

const DashboardPage: React.FC<PageProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title ?? ""} - Anthorflix`;
  }, [title]);

  return (
    <Container>
      <Typography
        sx={{ color: "#999999" }}
        component="h1"
        variant="h5"
        paddingTop={1}
      >
        {title}
      </Typography>
      <Box>{children}</Box>
    </Container>
  );
};

export default DashboardPage;
