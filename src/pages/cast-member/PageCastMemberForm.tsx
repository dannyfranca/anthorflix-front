import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Page from "@/components/Page";
import SingleGrid from "@/components/SingleGrid";
import { tJoin } from "@/i18t/utils";
import CastMemberForm from "./CastMemberForm";

const PageCastMemberForm = () => {
  const { id } = useParams<any>();
  const { t } = useTranslation();

  return (
    <Page
      title={
        id
          ? tJoin(["Edit", "Cast member"], t)
          : tJoin(["Create", "Cast member"], t)
      }
    >
      <SingleGrid maxSize={8}>
        <CastMemberForm />
      </SingleGrid>
    </Page>
  );
};

export default PageCastMemberForm;
