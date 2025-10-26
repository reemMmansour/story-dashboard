
import { baseUrl, endPointsUrl} from "../endPoints";
import api from "../../utils/axios";

export const getStoriesApi = async () => {
  const res = await api({ method: "get", url: baseUrl + endPointsUrl.getStory });
  console.log(res.data, "story");
  return res?.data;
};
