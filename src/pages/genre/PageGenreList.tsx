import { Fab, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DashboardPage from "@/components/DashboardPage";
import { tJoin } from "@/i18t/utils";
import GenreTable from "./GenreTable";

const PageGenreList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <DashboardPage title={tJoin(["List", "Genre"], t)}>
      <Box dir="rtl" py={2}>
        <Tooltip title={tJoin(["Add", "Genre"]) as string}>
          <Fab color="primary" size="small" component={Link} to="genres/create">
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>
      <Box>
        <GenreTable />
      </Box>
    </DashboardPage>
  );
};

export default PageGenreList;
