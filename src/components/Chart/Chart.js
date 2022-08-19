import Chatbar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Chatbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
