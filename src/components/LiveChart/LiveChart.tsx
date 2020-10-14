import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { TypeChooser } from "react-stockcharts/lib/helper";
import socketIOClient from "socket.io-client";

import { TRANSLATION_TYPES, WEBSOCKET_URL } from "../../constants/appConstants";
import { OHLCData } from "../../models/OHLCData";
import Chart from "../Chart/Chart";

interface LiveChartProps {
  classes: any;
  open: boolean;
  saveLiveChartData: (cachedLiveChartData: OHLCData[]) => void;
  cachedLiveChartData: OHLCData[];
}

const LiveChart: React.FunctionComponent<LiveChartProps> = ({
  classes,
  open,
  saveLiveChartData,
  cachedLiveChartData,
}) => {
  const { t } = useTranslation(TRANSLATION_TYPES.TRANSLATION);
  const [liveData, setLiveData] = useState<OHLCData[]>([]);

  let socket;
  useEffect(() => {
    socket = socketIOClient(WEBSOCKET_URL);
    socket.emit("sub", { state: true });
    socket &&
      socket.on("data", (data1, ack) => {
        setLiveData((previousLiveData) => {
          let tempData = [...previousLiveData];
          tempData.push(new OHLCData(data1));
          return tempData;
        });
        setTimeout(() => ack(1), 300);
      });
    return () => {
      //saveLiveChartData(liveData);
      socket.emit("unsub", { state: false });
      socket.disconnect();
    };
  }, []);
  useEffect(() => {
    return () => {
      saveLiveChartData(liveData);
    };
  }, [liveData]);
  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div className={classes.drawerHeader} />
      <h2>{t("title.live")}</h2>
      {liveData && liveData.length > 1 ? (
        <TypeChooser>
          {(type: any) => <Chart type={type} data={liveData} width={1000} />}
        </TypeChooser>
      ) : (
        cachedLiveChartData &&
        cachedLiveChartData.length > 1 && (
          <TypeChooser>
            {(type: any) => (
              <Chart type={type} data={cachedLiveChartData} width={1000} />
            )}
          </TypeChooser>
        )
      )}
    </div>
  );
};

export default LiveChart;
