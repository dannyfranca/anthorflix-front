import * as React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";

import * as yup from "@/util/vendor/yup";
import { Movie } from "@/util/models";
import movieHttp from "@/util/http/movie-http";
import { SubmitActions } from "@/components/SubmitActions";
import { tJoin } from "@/i18t/utils";

const validationSchema = yup.object().shape({
  title: yup.string().required().max(255),
  description: yup.string().required().max(5000),
  year_launched: yup.number().integer().min(1900).max(2100),
});

const MovieForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Movie>({
    resolver: yupResolver(validationSchema),
  });

  const snackbar = useSnackbar();
  const history = useHistory();
  const { id } = useParams<any>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    movieHttp.get(id).then(({ data }) => {
      setMovie(data);
      reset(data as Movie);
    });
  }, []);

  const onSubmit = (formData, event?) => {
    setLoading(true);
    const request = movie
      ? movieHttp.update(id, formData)
      : movieHttp.create(formData);

    return request
      .then(({ data }) => {
        snackbar.enqueueSnackbar(tJoin(["Movie", "saved with success"], t), {
          variant: "success",
        });
        setTimeout(() => {
          if (event) history.push("/dashboard/movies");
          else if (!id) history.push(`/dashboard/movies/${data?.id}/edit`);
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
        {...register("title")}
        label={t("Title")}
        margin="normal"
        fullWidth
        disabled={loading}
        error={!!errors.title}
        helperText={errors.title && errors.title.message}
      />
      <TextField
        {...register("year_launched")}
        label={t("Year")}
        margin="normal"
        type="number"
        fullWidth
        disabled={loading}
        error={!!errors.year_launched}
        helperText={errors.year_launched && errors.year_launched.message}
      />
      <TextField
        {...register("description")}
        label={t("Synopsis")}
        rows={8}
        margin="normal"
        fullWidth
        multiline
        disabled={loading}
        error={!!errors.description}
        helperText={errors.description && errors.description.message}
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

export default MovieForm;
