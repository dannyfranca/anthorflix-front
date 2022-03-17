import * as React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";

import * as yup from "@/util/vendor/yup";
import { CastMember } from "@/util/models";
import { SubmitActions } from "@/components/SubmitActions";
import { tJoin } from "@/i18t/utils";
import castMemberHttp from "@/util/http/cast-member-http";

const validationSchema = yup.object().shape({
  name: yup.string().required().max(70),
});

const CastMemberForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    trigger,
    formState: { errors },
  } = useForm<CastMember>({
    resolver: yupResolver(validationSchema),
  });

  const snackbar = useSnackbar();
  const history = useHistory();
  const { id } = useParams<any>();
  const [category, setCastMember] = useState<CastMember | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    castMemberHttp.get(id).then(({ data }) => {
      setCastMember(data);
      reset(data as CastMember);
    });
  }, []);

  const onSubmit = (formData, event?) => {
    setLoading(true);
    const request = category
      ? castMemberHttp.update(id, formData)
      : castMemberHttp.create(formData);

    return request
      .then(({ data }) => {
        snackbar.enqueueSnackbar(
          tJoin(["Cast member", "saved with success"], t),
          {
            variant: "success",
          }
        );
        setTimeout(() => {
          if (event) history.push("/dashboard/cast_members");
          else if (!id)
            history.push(`/dashboard/cast_members/${data?.id}/edit`);
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

export default CastMemberForm;
