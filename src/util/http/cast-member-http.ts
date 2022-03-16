import { CastMember } from "../models";
import { httpClient } from "./http-client";
import HttpResource from "./http-resource";

const castMemberHttp = new HttpResource<CastMember>(httpClient, "cast_members");

export default castMemberHttp;
