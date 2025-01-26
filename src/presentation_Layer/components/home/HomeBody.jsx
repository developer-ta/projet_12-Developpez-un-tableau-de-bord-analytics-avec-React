import LineChartComponent from "./lineChartComponent/LineChartComponent";
import BarChartComponent from "./barChartComponent/BarChartComponent";
import RadarChartComponent from "./radarChartComponent/RadarChartComponent";
import RadialBarChartComponent from "./radialBarChartComponent/RadialBarChartComponent.jsx";
import styles from "./HomeBody.module.scss";
import DashboardHeader from "./dashboardHeader/DashboardHeader";
import HealthCardComponent from "./../healthCard/HealthCardComponent";
import { useState } from "react";
const listHealth = [
  { color: "#fbeaea", icon: "src/presentation_Layer/assets/energy.svg" },
  { color: "#4AB8FF1A", icon: "src/presentation_Layer/assets/chicken.svg" },
  { color: "#fbf6e5", icon: "src/presentation_Layer/assets/apple.svg" },
  {
    color: "#FD51811A",
    icon: "src/presentation_Layer/assets/cheeseburger.svg",
  },
];
export default function HomeBody() {
  // const { listHealth, setListHealth } = useState([...listHealthAll]);
  return (
    <main id="main">
      <div className={styles["dashboard-wrapper"]}>
        <DashboardHeader />
        <div id={styles["dashboard-content"]}>
          {/* {"section-1"} */}
          <section id={styles["dashboard-graphiques"]}>
            <BarChartComponent></BarChartComponent>
            <div id={styles["mini-graphiques"]}>
              <LineChartComponent></LineChartComponent>
              <RadarChartComponent></RadarChartComponent>
              <RadialBarChartComponent />
            </div>
          </section>

          {/* {"section-2"} */}
          <section id={styles["list-index-health"]}>
            {listHealth.map((l, index) => (
              <HealthCardComponent
                key={index}
                IconBackgroundColor={l.color}
                srcIcon={l.icon}
              />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
