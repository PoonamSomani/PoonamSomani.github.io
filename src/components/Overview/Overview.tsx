import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { TypeChooser } from "react-stockcharts/lib/helper";
import { orderBy } from "lodash";

import { TRANSLATION_TYPES } from "../../constants/appConstants";
import { getHistoricalData } from "../../services/overviewService";
import { OHLCData } from "../../models/OHLCData";
import Chart from "../Chart/Chart";
interface LiveChartProps {
  classes: any;
  open: boolean;
}

const LiveChart: React.FunctionComponent<LiveChartProps> = ({
  classes,
  open,
}) => {
  const [overviewData, setOverviewData] = useState<OHLCData[]>();
  const { t } = useTranslation(TRANSLATION_TYPES.TRANSLATION);

  useEffect(() => {
    fetchHistoricalData();
  }, []);
  const fetchHistoricalData = () => {
    getHistoricalData().then((response) => {
      setOverviewData(response);
    });
  };
  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div className={classes.drawerHeader} />
      <h2>{t("title.overview")}</h2>

      {overviewData && (
        <TypeChooser>
          {(type: any) => (
            <Chart
              type={"hybrid"}
              data={orderBy(overviewData, ["date"], ["asc"])}
              width={1000}
              refetch={fetchHistoricalData}
            />
          )}
        </TypeChooser>
      )}
    </div>
  );
};

export default LiveChart;
