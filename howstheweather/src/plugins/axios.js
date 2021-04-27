  
import Axios from "axios";
import { API_KEY } from "constants.js";
const axios = Axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`
});

export { axios };