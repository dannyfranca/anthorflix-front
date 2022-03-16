import { FunctionComponent } from "react";
import { RouteProps } from "react-router-dom";

import i18next from "@/i18t";
import Dashboard from "@/pages/Dashboard";

export interface AppRouteProps extends RouteProps {
  name: string;
  label: string;
  component: FunctionComponent;
  exact?: boolean;
}

const routes: AppRouteProps[] = [
  {
    name: "dashboard",
    label: i18next.t("Dashboard"),
    path: "/",
    component: Dashboard,
    exact: true,
  },
];

export default routes;
