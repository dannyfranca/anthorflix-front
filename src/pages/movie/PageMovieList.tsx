import { Fab } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DashboardPage from "@/components/DashboardPage";
import { tJoin } from "@/i18t/utils";
import MovieTable from "./MovieTable";

const PageMovieList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <DashboardPage title={tJoin(["List", "Movies"], t)}>
      <Box dir="rtl" py={2}>
        <Fab
          title={t("Add Movie")}
          color="primary"
          size="small"
          component={Link}
          to="movies/create"
        >
          <AddIcon />
        </Fab>
      </Box>
      <Box>
        <MovieTable />
      </Box>
    </DashboardPage>
  );
};

export default PageMovieList;
