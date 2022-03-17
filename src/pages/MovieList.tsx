import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { Box, Container, Grid, Typography } from "@mui/material";

import { Movie } from "@/util/models";
import movieHttp from "@/util/http/movie-http";
import { Link } from "react-router-dom";
import MovieThumb from "@/components/MovieThumb";
import RatingBadge from "@/components/RatingBadge";
import { handleRequestError } from "@/util/request-error-handler";

const MovieList: React.FC = () => {
  const { t } = useTranslation();
  const snackbar = useSnackbar();
  const [data, setData] = useState<Movie[]>([]);

  const getData = () => {
    movieHttp
      .list()
      .then(({ data }) => {
        setData(data);
      })
      .catch(handleRequestError(snackbar)(t));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box paddingTop="20px">
      <Container>
        <Grid container spacing={3}>
          {data.map((d) => (
            <Grid key={d.id} item xs={12} sm={4} md={3} lg={2}>
              <Box sx={{ position: "relative" }}>
                <Link to={`movies/${d.id}`}>
                  <MovieThumb />
                </Link>
                <RatingBadge
                  rating={10}
                  sx={{
                    maxWidth: "200px",
                    position: "absolute",
                    bottom: "-12px",
                    left: "20px",
                  }}
                />
              </Box>
              <Box
                component={Link}
                to={`movies/${d.id}`}
                sx={{ textDecoration: "none", color: "#222" }}
              >
                <Typography sx={{ fontWeight: 700 }} pt={2} variant="subtitle1">
                  {d.title}
                </Typography>
              </Box>
              <Typography variant="subtitle2">{d.year_launched}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MovieList;
