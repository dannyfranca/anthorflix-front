import { FunctionComponent } from "react";
import { RouteProps } from "react-router-dom";

import i18next from "@/i18t";
import Dashboard from "@/pages/Dashboard";
import PageGenreList from "@/pages/genre/PageGenreList";
import PageGenreForm from "@/pages/genre/PageGenreForm";

export interface AppRouteProps extends RouteProps {
  name: string;
  path: string;
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
  {
    name: "genres.list",
    label: i18next.t("Genre List"),
    path: "/genres",
    component: PageGenreList,
    exact: true,
  },
  {
    name: "genres.create",
    label: i18next.t("Create Genre"),
    path: "/genres/create",
    component: PageGenreForm,
    exact: true,
  },
  {
    name: "genres.edit",
    label: i18next.t("Edit Genre"),
    path: "/genres/:id/edit",
    component: PageGenreForm,
    exact: true,
  },
];

export default routes;
