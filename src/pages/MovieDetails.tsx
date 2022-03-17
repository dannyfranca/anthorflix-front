import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { Box, Container, Grid, Typography } from "@mui/material";

import { Movie } from "@/util/models";
import movieHttp from "@/util/http/movie-http";
import { useParams } from "react-router-dom";
import MovieThumb from "@/components/MovieThumb";
import RatingBadge from "@/components/RatingBadge";

const MovieDetails: React.FC = () => {
  const { t } = useTranslation();
  const snackbar = useSnackbar();
  const { id } = useParams<any>();
  const [data, setData] = useState<Movie | null>(null);

  const getData = () => {
    movieHttp
      .get(id)
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
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
    <Box paddingTop="20px">
      <Container>
        <Grid
          container
          spacing={3}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Grid item xs={12} md={4}>
            <MovieThumb style={{ maxWidth: "400px" }} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4">
              <b>{data?.title}</b>
              {` (${data?.year_launched})`}
            </Typography>
            <Typography variant="body1">
              {["Gênero 1 ", "Gênero 2"].join(", ")}
            </Typography>
            <Box
              py={3}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <RatingBadge rating={10} sizeFactor={1.3} />
            </Box>
            <Typography variant="h5" pt={2} sx={{ fontWeight: 700 }}>
              {t("Synopsis")}
            </Typography>
            <Typography variant="body1" pt={1}>
              {data?.description}
            </Typography>
            <Typography variant="h6" pt={2} sx={{ fontWeight: 700 }}>
              {t("Director")}
            </Typography>
            <Typography variant="body2" pt={1}>
              Diretor
            </Typography>
            <Typography variant="h6" pt={2} sx={{ fontWeight: 700 }}>
              {t("Cast members")}
            </Typography>
            <Typography variant="body2" pt={1}>
              {["Ator 1 ", "Ator 2"].join(", ")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MovieDetails;
