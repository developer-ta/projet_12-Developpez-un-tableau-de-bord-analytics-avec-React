import LineChartComponent from "./lineChartComponent/LineChartComponent";
import BarChartComponent from "./barChartComponent/BarChartComponent";
import RadarChartComponent from './radarChartComponent/RadarChartComponent';
import RadialBarChartComponent from "./radialBarChartComponent/RadialBarChartComponent.jsx";

export default function HomeBody() {
  return (
    <div className="main">
      {/* <h2>HomeBody</h2> */}
      {/* <BarChartComponent></BarChartComponent> */}
      {/* <LineChartComponent></LineChartComponent> */}
      {/* <RadarChartComponent></RadarChartComponent> */}
      <RadialBarChartComponent />
    </div>
  );
}
