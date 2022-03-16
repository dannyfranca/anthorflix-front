import * as React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";

import * as yup from "@/util/vendor/yup";
import { Genre } from "@/util/models";
import genreHttp from "@/util/http/genre-http";
import { SubmitActions } from "@/components/SubmitActions";

const validationSchema = yup.object().shape({
  name: yup.string().required().max(70),
});

const GenreForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Genre>({
    resolver: yupResolver(validationSchema),
  });

  const snackbar = useSnackbar();
  const history = useHistory();
  const { id } = useParams<any>();
  const [category, setGenre] = useState<Genre | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    genreHttp.get(id).then(({ data }) => {
      setGenre(data);
      reset(data as Genre);
    });
  }, []);

  const onSubmit = (formData, event?) => {
    setLoading(true);
    const request = category
      ? genreHttp.update(id, formData)
      : genreHttp.create(formData);

    return request
      .then(({ data }) => {
        snackbar.enqueueSnackbar(t("Genre saved with success"), {
          variant: "success",
        });
        setTimeout(() => {
          if (event) history.push("/genres");
          else if (!id) history.push(`/genres/${data?.id}/edit`);
        });
      })
      .catch((error) => {
        console.log(error);
        snackbar.enqueueSnackbar(t(error.message), {
          variant: "error",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("name")}
        label={t("Name")}
        margin="normal"
        fullWidth
        disabled={loading}
        error={!!errors.name}
        helperText={errors.name && errors.name.message}
      />
      <SubmitActions
        disabled={loading}
        handleSave={async () => {
          if (await trigger()) onSubmit(getValues());
        }}
      />
    </form>
  );
};

export default GenreForm;
