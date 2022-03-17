import { FunctionComponent } from "react";
import { RouteProps } from "react-router-dom";

import i18next from "@/i18t";
import Dashboard from "@/pages/dashboard/Dashboard";
import PageGenreList from "@/pages/dashboard/genre/PageGenreList";
import PageGenreForm from "@/pages/dashboard/genre/PageGenreForm";
import { tJoin } from "@/i18t/utils";
import PageCastMemberList from "@/pages/dashboard/cast-member/PageCastMemberList";
import PageCastMemberForm from "@/pages/dashboard/cast-member/PageCastMemberForm";
import PageMovieList from "@/pages/dashboard/movie/PageMovieList";
import PageMovieForm from "@/pages/dashboard/movie/PageMovieForm";
import MovieList from "@/pages/MovieList";
import MovieDetails from "@/pages/MovieDetails";

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
    path: "/dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    name: "dashboard.genres.list",
    label: tJoin(["List", "Genres"]),
    path: "/dashboard/genres",
    component: PageGenreList,
    exact: true,
  },
  {
    name: "dashboard.genres.create",
    label: tJoin(["Create", "Genre"]),
    path: "/dashboard/genres/create",
    component: PageGenreForm,
    exact: true,
  },
  {
    name: "dashboard.genres.edit",
    label: tJoin(["Edit", "Genre"]),
    path: "/dashboard/genres/:id/edit",
    component: PageGenreForm,
    exact: true,
  },
  {
    name: "dashboard.cast_members.list",
    label: tJoin(["List", "Cast members"]),
    path: "/dashboard/cast_members",
    component: PageCastMemberList,
    exact: true,
  },
  {
    name: "dashboard.cast_members.create",
    label: tJoin(["Create", "Cast member"]),
    path: "/dashboard/cast_members/create",
    component: PageCastMemberForm,
    exact: true,
  },
  {
    name: "dashboard.cast_members.edit",
    label: tJoin(["Edit", "Cast member"]),
    path: "/dashboard/cast_members/:id/edit",
    component: PageCastMemberForm,
    exact: true,
  },
  {
    name: "dashboard.movies.list",
    label: tJoin(["List", "Movies"]),
    path: "/dashboard/movies",
    component: PageMovieList,
    exact: true,
  },
  {
    name: "dashboard.movies.create",
    label: tJoin(["Create", "Movie"]),
    path: "/dashboard/movies/create",
    component: PageMovieForm,
    exact: true,
  },
  {
    name: "dashboard.movies.edit",
    label: tJoin(["Edit", "Movie"]),
    path: "/dashboard/movies/:id/edit",
    component: PageMovieForm,
    exact: true,
  },
  {
    name: "movies",
    label: i18next.t("Movies"),
    path: "/movies",
    component: MovieList,
    exact: true,
  },
  {
    name: "movies.detail",
    label: i18next.t("Movie"),
    path: "/movies/:id",
    component: MovieDetails,
    exact: true,
  },
];

export default routes;
