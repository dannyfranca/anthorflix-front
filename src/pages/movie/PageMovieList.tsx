import { Fab, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import ImportExport from "@mui/icons-material/ImportExport";
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
        <Box component="span" px={1}>
          <Tooltip title={tJoin(["Import", "Movie"]) as string}>
            <Fab
              color="primary"
              size="small"
              component={Link}
              to="movies/import"
            >
              <ImportExport />
            </Fab>
          </Tooltip>
        </Box>
        <Box component="span" px={1}>
          <Tooltip title={tJoin(["Add", "Movie"]) as string}>
            <Fab
              color="primary"
              size="small"
              component={Link}
              to="movies/create"
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </Box>
      </Box>
      <Box>
        <MovieTable />
      </Box>
    </DashboardPage>
  );
};

export default PageMovieList;
