import { Fab } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DashboardPage from "@/components/DashboardPage";
import { tJoin } from "@/i18t/utils";
import CastMemberTable from "./CastMemberTable";

const PageCastMemberList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <DashboardPage title={tJoin(["List", "Cast member"], t)}>
      <Box dir="rtl" py={2}>
        <Fab
          title={t("Add Cast member")}
          color="primary"
          size="small"
          component={Link}
          to="cast_members/create"
        >
          <AddIcon />
        </Fab>
      </Box>
      <Box>
        <CastMemberTable />
      </Box>
    </DashboardPage>
  );
};

export default PageCastMemberList;
