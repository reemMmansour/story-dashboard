import type { ILoginForm } from "../../models/auth.model";
import api from "../../utils/axios";
import { baseUrl, endPointsUrl } from "../endPoints";
// import axios from "axios";

export const loginApi = async (credentials: ILoginForm) => {
  const res = await api.post(baseUrl + endPointsUrl.login, credentials);
  console.log(res, "response data");
  return res?.data;
};
