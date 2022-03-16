import { Fab } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Page from "@/components/Page";
import { tJoin } from "@/i18t/utils";
import GenreTable from "./GenreTable";

const PageGenreList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Page title={tJoin(["List", "Genre"], t)}>
      <Box dir="rtl" py={2}>
        <Fab
          title={t("Add Genre")}
          color="primary"
          size="small"
          component={Link}
          to="genres/create"
        >
          <AddIcon />
        </Fab>
      </Box>
      <Box>
        <GenreTable />
      </Box>
    </Page>
  );
};

export default PageGenreList;
