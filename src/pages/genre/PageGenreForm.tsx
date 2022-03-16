import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Page from "@/components/Page";
import SingleGrid from "@/components/SingleGrid";
import { tJoin } from "@/i18t/utils";
import GenreForm from "./GenreForm";

const PageGenreForm = () => {
  const { id } = useParams<any>();
  const { t } = useTranslation();

  return (
    <Page
      title={id ? tJoin(["Edit", "Genre"], t) : tJoin(["Create", "Genre"], t)}
    >
      <SingleGrid maxSize={8}>
        <GenreForm />
      </SingleGrid>
    </Page>
  );
};

export default PageGenreForm;
