import * as React from "react";
import { useParams } from "react-router-dom";

import Page from "@/components/Page";
import SingleGrid from "@/components/SingleGrid";
import GenreForm from "./GenreForm";

const PageGenreForm = () => {
  const { id } = useParams<any>();
  return (
    <Page title={!id ? "Criar categoria" : "Editar categoria"}>
      <SingleGrid maxSize={8}>
        <GenreForm />
      </SingleGrid>
    </Page>
  );
};

export default PageGenreForm;
