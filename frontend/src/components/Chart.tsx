import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import { connectToSSE } from "../services/api";

interface ChartData {
  category: string;
  value: number;
}

const Chart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [manualRefresh, setManualRefresh] = useState(false);

  const refreshChart = () => {
    setManualRefresh(!manualRefresh);
  };

  useEffect(() => {
    const cleanup = connectToSSE((data: ChartData[]) => {
      setChartData(data);
      const chartDom = document.getElementById("chart")!;
      const myChart = echarts.init(chartDom);
      myChart.setOption({
        xAxis: {
          type: "category",
          data: data.map((item) => item.category),
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: data.map((item) => item.value),
            type: "bar",
          },
        ],
      });
    });

    return cleanup;
  }, [manualRefresh]);

  return (
    <div>
      <button onClick={refreshChart}>手动刷新</button>
      <div id="chart" style={{ width: "100%", height: "400px" }} />
    </div>
  );
};

export default Chart;
