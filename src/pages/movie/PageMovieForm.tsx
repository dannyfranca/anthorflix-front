import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DashboardPage from "@/components/DashboardPage";
import SingleGrid from "@/components/SingleGrid";
import { tJoin } from "@/i18t/utils";
import MovieForm from "./MovieForm";

const PageMovieForm = () => {
  const { id } = useParams<any>();
  const { t } = useTranslation();

  return (
    <DashboardPage
      title={id ? tJoin(["Edit", "Movie"], t) : tJoin(["Create", "Movie"], t)}
    >
      <SingleGrid maxSize={8}>
        <MovieForm />
      </SingleGrid>
    </DashboardPage>
  );
};

export default PageMovieForm;
