import { Movie } from "../models";
import { httpClient } from "./http-client";
import HttpResource from "./http-resource";

const movieHttp = new HttpResource<Movie>(httpClient, "movies");

export default movieHttp;
