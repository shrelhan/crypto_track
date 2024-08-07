import React, { useEffect } from "react";
import Chart from "react-google-charts";
import "./LineChart.css";
import { useState } from "react";

const LineChart = ({ historyData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);
  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historyData.prices) {
      historyData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
        setData(dataCopy);
      });
    }
  }, [historyData]);
  return (
    <div>
      <Chart
        chartType="LineChart"
        data={data}
        height="100%"
        legendToggle
      ></Chart>
    </div>
  );
};

export default LineChart;
