import React from "react";
import PropTypes from "prop-types";

import { format } from "d3-format";

import { ChartCanvas, Chart, ZoomButtons } from "react-stockcharts";
import { OHLCSeries, LineSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
  CrossHairCursor,
  EdgeIndicator,
  MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import {
  OHLCTooltip,
  MovingAverageTooltip,
} from "react-stockcharts/lib/tooltip";
import {
  ema,
  macd,
  change,
  elderImpulse,
} from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";

class OHLCChartWithElderImpulseIndicator extends React.Component {
  render() {
    const changeCalculator = change();

    const ema12 = ema()
      .id(1)
      .options({ windowSize: 18 })
      .merge((d, c) => {
        d.ema12 = c;
      })
      .accessor((d) => d.ema12);

    const macdCalculator = macd()
      .options({
        fast: 12,
        slow: 26,
        signal: 9,
      })
      .merge((d, c) => {
        d.macd = c;
      })
      .accessor((d) => d.macd);

    const elderImpulseCalculator = elderImpulse()
      .macdSource(macdCalculator.accessor())
      .emaSource(ema12.accessor());

    const { type, data: initialData, width, ratio, refetch } = this.props;

    const calculatedData = elderImpulseCalculator(
      macdCalculator(ema12(changeCalculator(initialData)))
    );
    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      (d) => d.date
    );
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
      calculatedData
    );

    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 150)]);
    const xExtents = [start, end];

    return (
      <ChartCanvas
        height={500}
        width={width}
        ratio={ratio}
        margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
        type={type}
        seriesName="MSFT"
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
        mouseMoveEvent={true}
        panEvent={true}
        zoomEvent={true}
      >
        <Chart
          id={1}
          height={300}
          yExtents={(d) => [d.high, d.low]}
          padding={{ top: 10, bottom: 10 }}
        >
          <XAxis
            axisAt="bottom"
            orient="bottom"
            showTicks={false}
            outerTickSize={0}
            zoomEnabled={true}
          />
          <YAxis axisAt="right" orient="right" ticks={2} zoomEnabled={true} />

          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={format(".2f")}
          />

          <LineSeries yAccessor={ema12.accessor()} stroke={ema12.stroke()} />

          <OHLCSeries
            stroke={(d) => elderImpulseCalculator.stroke()[d.elderImpulse]}
          />

          <EdgeIndicator
            itemType="last"
            orient="right"
            edgeAt="right"
            yAccessor={(d) => d.close}
            fill={(d) => (d.close > d.open ? "#6BA583" : "#FF0000")}
          />

          <OHLCTooltip origin={[-40, -10]} />
          <ZoomButtons onReset={refetch}/>
          <MovingAverageTooltip
            onClick={(e) => console.log(e)}
            origin={[-38, 5]}
            options={[
              {
                yAccessor: ema12.accessor(),
                type: "EMA",
                stroke: ema12.stroke(),
                windowSize: ema12.options().windowSize,
              },
            ]}
          />
        </Chart>
        <Chart
          id={2}
          height={150}
          yExtents={(d) => d.volume}
          origin={(w, h) => [0, h - 300]}
        >
          <YAxis
            axisAt="left"
            orient="left"
            ticks={5}
            tickFormat={format(".2s")}
            zoomEnabled={true}
          />

          <MouseCoordinateY
            at="left"
            orient="left"
            displayFormat={format(".4s")}
          />
        </Chart>

        <CrossHairCursor />
      </ChartCanvas>
    );
  }
}

OHLCChartWithElderImpulseIndicator.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
  refetch: PropTypes.func
};

OHLCChartWithElderImpulseIndicator.defaultProps = {
  type: "svg",
};
OHLCChartWithElderImpulseIndicator = fitWidth(
  OHLCChartWithElderImpulseIndicator
);

export default OHLCChartWithElderImpulseIndicator;
