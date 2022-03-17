import { Rating } from "../models";
import { httpClient } from "./http-client";
import HttpResource from "./http-resource";

const ratingHttp = new HttpResource<Rating>(httpClient, "ratings");

export default ratingHttp;
