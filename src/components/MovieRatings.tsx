import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

import { Rating } from "@/util/models";
import ratingHttp from "@/util/http/rating-http";
import RatingBadge from "@/components/RatingBadge";
import HttpResource from "@/util/http/http-resource";

interface MovieRatingsProps {
  movieId: string;
}

const MovieRatings: React.FC<MovieRatingsProps> = ({ movieId }) => {
  const { t } = useTranslation();
  const snackbar = useSnackbar();
  const [data, setData] = useState<Rating[] | null>(null);

  const getData = () => {
    ratingHttp
      .list({
        queryParams: { movie_id: movieId },
      })
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        if (HttpResource.isCanceled(error)) return;
        console.error(error);
        snackbar.enqueueSnackbar(t("Unable to load data"), {
          variant: "error",
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box py={2}>
      <Box
        py={1}
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>username</Typography>
        <RatingBadge rating={10} sizeFactor={0.7} />
      </Box>
      <Typography>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.`}
      </Typography>
      <Box pl={4}>
        <Typography sx={{ fontWeight: 700, fontSize: "0.9rem" }} pt={2}>
          username
        </Typography>
        <Typography>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.`}
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: "0.9rem" }} pt={2}>
          username
        </Typography>
        <Typography>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.`}
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieRatings;
