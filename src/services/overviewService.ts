import axios from "axios";

import { OVERVIEW_URL } from "../constants/appConstants";
import { OHLCData } from "../models/OHLCData";

export function getHistoricalData() {
  let requestParamObj: any = {
    method: "GET",
    url: OVERVIEW_URL,
    headers: {},
  };
  return axios(requestParamObj)
    .then((response) => {
      return response.data.map((ohlcData) => new OHLCData(ohlcData));
    })
    .catch((error) => {});
}
