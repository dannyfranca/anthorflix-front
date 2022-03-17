import { ProviderContext } from "notistack";
import { TFunction } from "i18next";

import HttpResource from "./http/http-resource";

export const handleRequestError =
  (snackbar: ProviderContext) => (t: TFunction) => (error: any) => {
    if (HttpResource.isCanceled(error)) return;
    console.error(error);
    snackbar.enqueueSnackbar(t("Unable to load data"), {
      variant: "error",
    });
  };
