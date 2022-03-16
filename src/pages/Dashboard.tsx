import * as React from "react";
import { useTranslation } from "react-i18next";

import DashboardPage from "@/components/DashboardPage";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  return <DashboardPage title={t("Home")} />;
};

export default Dashboard;
